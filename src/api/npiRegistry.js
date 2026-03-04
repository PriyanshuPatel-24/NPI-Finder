/**
 * NPI Registry (NPPES) API – real provider search
 * Official API: https://npiregistry.cms.hhs.gov/api-page
 * Uses Vite proxy in dev to avoid CORS (/npi-api -> npiregistry.cms.hhs.gov/api)
 */

import { getStateCode, getStateName } from '../data/stateCodes';

// Use proxy in dev (Vite proxy /npi-api -> npiregistry.cms.hhs.gov/api) to avoid CORS
const API_BASE =
  typeof import.meta !== 'undefined' && import.meta.env?.DEV
    ? '/npi-api'
    : 'https://npiregistry.cms.hhs.gov/api';

/**
 * Parse full name into first, middle, last for NPPES API
 */
function parseFullName(fullName) {
  const parts = (fullName || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first_name: '', last_name: '' };
  if (parts.length === 1) return { first_name: parts[0], last_name: parts[0] };
  const first_name = parts[0];
  const last_name = parts[parts.length - 1];
  const middle_name = parts.length > 2 ? parts.slice(1, -1).join(' ') : '';
  return { first_name, last_name, middle_name };
}

/**
 * Build address string from NPPES address object
 */
function formatAddress(addr) {
  if (!addr) return '';
  const parts = [addr.address_1, addr.address_2, addr.city, addr.state, addr.postal_code].filter(Boolean);
  return parts.join(', ');
}

/**
 * Normalize credential for comparison (e.g. "M.D." -> "MD", "P.A-C" -> "PA")
 */
function normalizeCredential(cred) {
  if (!cred || typeof cred !== 'string') return '';
  return cred
    .replace(/\s+/g, '')
    .replace(/\./g, '')
    .replace(/-/g, '')
    .toUpperCase();
}

/**
 * Check if provider's credential matches user's (supports "MD", "M.D.", "PA-C", etc.)
 */
function credentialMatches(providerCred, userCred) {
  if (!userCred || !userCred.trim()) return true;
  const u = normalizeCredential(userCred);
  const p = normalizeCredential(providerCred);
  return p.includes(u) || u.includes(p);
}

/**
 * Compute simple match score 0–100 based on name/state/credential match
 */
function matchAccuracy(provider, searchName, searchCred, searchState) {
  let score = 85;
  const fullName = [provider.basic?.first_name, provider.basic?.middle_name, provider.basic?.last_name]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  const search = (searchName || '').toLowerCase();
  if (search && fullName.includes(search)) score += 10;
  if (provider.basic?.credential && searchCred && credentialMatches(provider.basic.credential, searchCred))
    score += 3;
  const addrState = provider.addresses?.[0]?.state || '';
  const stateCode = getStateCode(searchState);
  if (stateCode && addrState === stateCode) score += 2;
  return Math.min(99, score);
}

/**
 * Map NPPES result to app format
 */
function mapResult(r, index, searchName, searchCred, searchState) {
  const basic = r.basic || {};
  const first = basic.first_name || '';
  const middle = basic.middle_name || '';
  const last = basic.last_name || '';
  const name = [first, middle, last].filter(Boolean).join(' ');
  const credential = basic.credential || '';
  const addr = r.addresses?.[0] || r.addresses?.[1];
  const stateCode = addr?.state || '';
  const state = getStateName(stateCode) || stateCode;
  const address = formatAddress(addr);

  return {
    id: r.number || `npi-${index}`,
    name: name || 'Unknown',
    credential: credential,
    state: state,
    address: address || '',
    npi: String(r.number || ''),
    matchAccuracy: matchAccuracy(r, searchName, searchCred, searchState)
  };
}

/**
 * Search NPI Registry by provider name, credential, and state
 * @param {{ name: string, credential: string, state: string, address?: string }} params
 * @returns {Promise<Array<{ id, name, credential, state, address, npi, matchAccuracy }>>}
 */
export async function searchNPI(params) {
  const { name, credential, state } = params || {};
  const nameTrim = (name || '').trim();
  if (!nameTrim) return [];

  const { first_name, last_name } = parseFullName(nameTrim);
  const stateCode = getStateCode(state);

  const query = new URLSearchParams({
    version: '2.1',
    first_name,
    last_name,
    limit: '200'
  });
  if (stateCode) query.set('state', stateCode);

  const url = `${API_BASE}/?${query.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`NPI Registry error: ${res.status}`);
    const data = await res.json();
    const results = data.results || [];

    let mapped = results.map((r, i) => mapResult(r, i, nameTrim, credential, state));

    if (credential && credential.trim()) {
      mapped = mapped.filter((p) => credentialMatches(p.credential, credential));
    }

    mapped.sort((a, b) => b.matchAccuracy - a.matchAccuracy);
    return mapped;
  } catch (err) {
    console.error('NPI search failed:', err);
    throw err;
  }
}
