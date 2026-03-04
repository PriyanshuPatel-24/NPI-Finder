const Contribute = () => {
    const contributors = [
        {
            name: 'Priyanshu Patel',
            role: 'Project Creator & Lead Developer',
            github: 'https://github.com/PriyanshuPatel-24',
            avatar: 'https://github.com/PriyanshuPatel-24.png',
        },
        {
            name: 'Jaysinh Dabhi',
            role: 'Sr. Front-End Developer & UI/UX Designer',
            github: 'https://github.com/JaysinhDabhi',
            avatar: 'https://github.com/JaysinhDabhi.png',
        },
        {
            name: 'Open Source Community',
            role: 'Various Contributions',
            github: '#',
            avatar: 'https://ui-avatars.com/api/?name=Open+Source&background=10b981&color=fff',
        }
    ];

    return (
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Contribute to <span className="text-primary-600 dark:text-primary-400">NPI Finder</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        NPI Finder is an open-source project dedicated to providing medical coders and healthcare professionals a streamlined, efficient way to lookup NPI numbers. We welcome contributions of all kinds!
                    </p>
                </div>

                {/* How to Contribute */}
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 sm:p-10 border border-primary-100 dark:border-primary-800/50 mb-16 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <svg className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        How to Get Involved
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-700 dark:text-gray-300 text-lg">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="text-primary-600 dark:text-primary-400 mr-4 text-2xl leading-none">💡</span>
                                <div>
                                    <strong className="block text-gray-900 dark:text-white mb-1">Feature Requests:</strong>
                                    <p className="text-base text-gray-600 dark:text-gray-400">Have an idea? Open an issue and let's discuss how it can improve the project.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-600 dark:text-primary-400 mr-4 text-2xl leading-none">🐛</span>
                                <div>
                                    <strong className="block text-gray-900 dark:text-white mb-1">Bug Reports:</strong>
                                    <p className="text-base text-gray-600 dark:text-gray-400">Found a bug? Let us know so we can fix it and improve stability.</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="text-primary-600 dark:text-primary-400 mr-4 text-2xl leading-none">💻</span>
                                <div>
                                    <strong className="block text-gray-900 dark:text-white mb-1">Code Contributions:</strong>
                                    <p className="text-base text-gray-600 dark:text-gray-400">Fork the repository, create a branch, and submit a Pull Request.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-600 dark:text-primary-400 mr-4 text-2xl leading-none">📖</span>
                                <div>
                                    <strong className="block text-gray-900 dark:text-white mb-1">Documentation:</strong>
                                    <p className="text-base text-gray-600 dark:text-gray-400">Help us improve our README, wikis, and inline code documentation.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 text-center md:text-left">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors shadow-sm">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Core Contributors */}
                <div>
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Meet the Contributors</h3>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">The brilliant minds building and maintaining this project.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {contributors.map((contributor, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                                <img
                                    src={contributor.avatar}
                                    alt={contributor.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary-50 dark:border-gray-700 object-cover"
                                />
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{contributor.name}</h4>
                                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mt-1">{contributor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contribute;
