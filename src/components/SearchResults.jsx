import { useState } from 'react';

const SearchResults = ({ results }) => {
  const [copiedNPI, setCopiedNPI] = useState(null);

  const copyToClipboard = (npi) => {
    navigator.clipboard.writeText(npi).then(() => {
      setCopiedNPI(npi);
      setTimeout(() => setCopiedNPI(null), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  if (results.length === 0) {
    return (
      <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-lg p-6 sm:p-8 text-center border border-white/80 dark:border-gray-700/60 ring-1 ring-gray-200/50 dark:ring-gray-700/30">
        <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Results Found</h3>
        <p className="text-gray-600 dark:text-gray-400">
          No providers found matching your search criteria. Please try adjusting your search parameters.
        </p>
      </div>
    );
  }

  // Single match display
  if (results.length === 1) {
    const provider = results[0];
    return (
      <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-lg p-6 md:p-8 border border-white/80 dark:border-gray-700/60 ring-1 ring-gray-200/50 dark:ring-gray-700/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Search Result</h2>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold w-fit">
            {provider.matchAccuracy}% Match
          </span>
        </div>

        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Provider Name</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{provider.name}</p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Credential</p>
            <p className="text-lg font-medium text-gray-900 dark:text-white">{provider.credential}</p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">State</p>
            <p className="text-lg font-medium text-gray-900 dark:text-white">{provider.state}</p>
          </div>

          {provider.address && (
            <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Address</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">{provider.address}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">NPI Number</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{provider.npi}</p>
            </div>
            <button
              onClick={() => copyToClipboard(provider.npi)}
              className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
              title="Copy NPI to clipboard"
            >
              {copiedNPI === provider.npi ? (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Multiple matches display
  return (
    <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-white/80 dark:border-gray-700/60 ring-1 ring-gray-200/50 dark:ring-gray-700/30 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Search Results</h2>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold w-fit">
          {results.length} Matches Found
        </span>
      </div>

      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Provider Name
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Credential
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                State
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                NPI Number
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Match %
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
            {results.map((provider) => (
              <tr key={provider.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-4 sm:px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{provider.name}</div>
                  {provider.address && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[200px] sm:max-w-none">{provider.address}</div>
                  )}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{provider.credential}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{provider.state}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{provider.npi}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(provider.npi)}
                      className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      title="Copy NPI"
                    >
                      {copiedNPI === provider.npi ? (
                        <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${provider.matchAccuracy >= 95 ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                      provider.matchAccuracy >= 85 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                        'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
                    }`}>
                    {provider.matchAccuracy}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResults;
