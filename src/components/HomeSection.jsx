import { useState, useRef, useEffect } from 'react';
import { searchNPI } from '../api/npiRegistry';
import SearchResults from './SearchResults';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

const CREDENTIALS = ['MD', 'DO', 'NP', 'PA', 'RN', 'DDS', 'DMD', 'PharmD', 'DPM', 'OD', 'LCSW', 'PhD', 'PsyD'];

const HomeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    credential: '',
    state: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [stateSuggestions, setStateSuggestions] = useState([]);
  const [credSuggestions, setCredSuggestions] = useState([]);
  const [showStateList, setShowStateList] = useState(false);
  const [showCredList, setShowCredList] = useState(false);
  const stateRef = useRef(null);
  const credRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (stateRef.current && !stateRef.current.contains(e.target)) setShowStateList(false);
      if (credRef.current && !credRef.current.contains(e.target)) setShowCredList(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Provider name is required';
    if (!formData.credential.trim()) newErrors.credential = 'Credential is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setResults(null);
    setSearchError(null);
    try {
      const searchResults = await searchNPI(formData);
      setResults(searchResults);
    } catch (err) {
      setSearchError(err?.message || 'Search failed. Check your connection or try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));

    if (name === 'state') {
      setShowStateList(true);
      const q = value.trim().toLowerCase();
      setStateSuggestions(q ? US_STATES.filter((s) => s.toLowerCase().includes(q)) : US_STATES);
    }
    if (name === 'credential') {
      setShowCredList(true);
      const q = value.trim().toUpperCase();
      setCredSuggestions(q ? CREDENTIALS.filter((c) => c.startsWith(q) || c.includes(q)) : CREDENTIALS);
    }
  };

  const selectState = (state) => {
    setFormData((prev) => ({ ...prev, state }));
    setShowStateList(false);
    setStateSuggestions([]);
  };

  const selectCredential = (cred) => {
    setFormData((prev) => ({ ...prev, credential: cred }));
    setShowCredList(false);
    setCredSuggestions([]);
  };

  return (
    <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Find Healthcare Provider NPI Numbers
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Search by full name, credential, and state. Multiple matches show match percentage and NPI with copy.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border border-white/80 dark:border-gray-700/60 ring-1 ring-gray-200/50 dark:ring-gray-700/30 transition-all">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Provider Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  placeholder="e.g., Jennifer Marie Smith"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="relative" ref={credRef}>
                <label htmlFor="credential" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Credential <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="credential"
                  name="credential"
                  value={formData.credential}
                  onChange={handleChange}
                  onFocus={() => {
                    setShowCredList(true);
                    setCredSuggestions(
                      formData.credential.trim()
                        ? CREDENTIALS.filter(
                          (c) =>
                            c.startsWith(formData.credential.trim().toUpperCase()) ||
                            c.includes(formData.credential.trim())
                        )
                        : CREDENTIALS
                    );
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${errors.credential ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  placeholder="e.g., MD, NP, PA"
                  autoComplete="off"
                />
                {showCredList && credSuggestions.length > 0 && (
                  <ul className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-h-48 overflow-auto">
                    {credSuggestions.map((c) => (
                      <li
                        key={c}
                        className="px-4 py-2 cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-900 dark:text-gray-100"
                        onMouseDown={() => selectCredential(c)}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {errors.credential && <p className="mt-1 text-sm text-red-500">{errors.credential}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative" ref={stateRef}>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => {
                    setShowStateList(true);
                    const q = formData.state.trim().toLowerCase();
                    setStateSuggestions(q ? US_STATES.filter((s) => s.toLowerCase().includes(q)) : US_STATES);
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${errors.state ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  placeholder="e.g., California, Texas"
                  autoComplete="off"
                />
                {showStateList && stateSuggestions.length > 0 && (
                  <ul className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-h-48 overflow-auto">
                    {stateSuggestions.map((s) => (
                      <li
                        key={s}
                        className="px-4 py-2 cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-900 dark:text-gray-100"
                        onMouseDown={() => selectState(s)}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address <span className="text-gray-400 dark:text-gray-500 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="e.g., 1245 Medical Center Dr"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Searching...
                  </>
                ) : (
                  'Find NPI'
                )}
              </button>
            </div>
          </form>
        </div>

        {searchError && (
          <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300">
            {searchError}
          </div>
        )}
        {results !== null && !searchError && (
          <div className="mt-8">
            <SearchResults results={results} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
