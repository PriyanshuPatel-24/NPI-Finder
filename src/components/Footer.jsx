export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 border-t border-gray-800 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NPI Finder. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built by <span className="text-primary-400 font-semibold">Priyanshu Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
