import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6 overflow-hidden">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
