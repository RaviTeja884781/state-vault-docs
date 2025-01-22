function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        StateVault Documentation
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        A powerful and type-safe state management solution for React applications
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Type-Safe by Design
          </h2>
          <p className="text-gray-600">
            Built with TypeScript from the ground up, providing excellent type inference
            and compile-time safety.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Modular Architecture
          </h2>
          <p className="text-gray-600">
            Organize your state logic into isolated modules using SafeDepositBox
            for better maintainability.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Efficient Updates
          </h2>
          <p className="text-gray-600">
            Smart state updates that only trigger re-renders when necessary,
            optimizing your application's performance.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Developer Friendly
          </h2>
          <p className="text-gray-600">
            Intuitive API design that feels familiar while providing powerful
            features for complex state management needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;