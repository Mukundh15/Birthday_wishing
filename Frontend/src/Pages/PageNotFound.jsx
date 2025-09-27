function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-center px-6">
        <h1 className="text-9xl font-extrabold text-sky-500 drop-shadow-lg">404</h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-600 max-w-md">The page you are looking for doesn’t exist or has been moved.</p>
        <a href="/" className="mt-6 px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl shadow-md hover:bg-sky-600 transition-all duration-300">Back to Home</a>
    </div>
  );
}

export default PageNotFound;