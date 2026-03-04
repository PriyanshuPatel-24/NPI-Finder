/**
 * Vercel Serverless Function: NPI Registry Proxy
 * Forwards requests to the NPPES NPI Registry API to avoid CORS issues in production.
 * Route: /api/npi-proxy
 */
export default async function handler(req, res) {
    // Set CORS headers so the browser frontend can call this endpoint
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Forward all query parameters from the frontend request to the NPPES API
        const params = new URLSearchParams(req.query);
        const npiUrl = `https://npiregistry.cms.hhs.gov/api/?${params.toString()}`;

        const response = await fetch(npiUrl);

        if (!response.ok) {
            return res.status(response.status).json({
                error: `NPI Registry returned status ${response.status}`,
            });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (err) {
        console.error('NPI proxy error:', err);
        return res.status(500).json({ error: 'Failed to fetch from NPI Registry.' });
    }
}
