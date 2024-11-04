import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (e) => setName(e.target.value);

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-500 mb-8">Enter your name to receive a greeting!</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="w-full p-2 border border-gray-300 rounded mb-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button
          onClick={handleGreet}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Greet Me
        </button>

        {greeting && (
          <div className="mt-6 text-lg font-semibold text-gray-800">
            {greeting}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;