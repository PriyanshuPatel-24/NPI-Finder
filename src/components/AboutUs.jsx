const AboutUs = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About NPI Finder
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                NPI Finder is a professional web application designed to streamline healthcare workflow processes 
                by simplifying the search for National Provider Identifier (NPI) numbers.
              </p>
              <p>
                Medical coders and healthcare administrators frequently need to locate NPI numbers for billing, 
                claims processing, and provider verification. Our tool provides an intuitive interface that 
                makes this process efficient and user-friendly.
              </p>
              <p>
                This project demonstrates modern web development practices using React.js and showcases how 
                frontend applications can be designed with future backend integration in mind, specifically 
                targeting integration with the CMS NPI Registry (NPPES).
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h3>
            <ul className="space-y-4">
              {['Streamlined search interface for healthcare providers', 'Match accuracy scoring for result confidence', 'One-click NPI number copying to clipboard', 'Production-ready UI designed for scalability', 'Built for educational and professional evaluation'].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
