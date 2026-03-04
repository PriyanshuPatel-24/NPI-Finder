const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Provider Details",
      description: "Input the healthcare provider's full name, credential type, state, and optionally their address to improve search accuracy."
    },
    {
      number: 2,
      title: "System Prepares Query",
      description: "The system structures your input into a standardized query format compatible with the CMS NPI Registry (NPPES) database."
    },
    {
      number: 3,
      title: "Backend Queries NPPES",
      description: "In production, the backend service will query the official CMS NPI Registry API to retrieve matching provider records. (Currently simulated with mock data)"
    },
    {
      number: 4,
      title: "Best Match Returned",
      description: "The system returns the most accurate match(es) with a confidence score, allowing medical coders to quickly verify and use the correct NPI number."
    }
  ];

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our streamlined process makes finding NPI numbers quick and efficient for medical coding professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 dark:bg-primary-800 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-200 dark:border-l-primary-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-5 sm:p-6 md:p-8 border border-primary-100 dark:border-primary-800/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">NPPES API Integration</h4>
              <p className="text-gray-700 dark:text-gray-300">
                This application uses the official CMS NPI Registry (NPPES) API. Searches query the live NPPES database maintained by the Centers for Medicare & Medicaid Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
