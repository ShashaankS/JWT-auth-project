import { useEffect, useRef, useState } from 'react';

function LoginPage() {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    userRef.current.focus();
  },[])

  useEffect(() => {
    setError('');
  },[username,password])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username && password) {
      // Call API to authenticate user
      // For demonstration purposes, assume the API call is successful
      console.log('Login successful');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <p ref={errRef} className={error ? "error" : "offscreen"} aria-live="assertive">{error}</p>
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col space-y-2">
          <span className="text-lg font-medium">Username:</span>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete='off'
            ref={userRef}
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col space-y-2">
          <span className="text-lg font-medium">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        >
          Sign In
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;