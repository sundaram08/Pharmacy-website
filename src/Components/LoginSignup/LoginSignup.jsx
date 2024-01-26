import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login as authLogin } from '../../features/userSlice';
import authService from '../../appwrite/authenticate';

function LoginSignup() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const activeUser = useSelector((state) => state.user.userData);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const session = await authService.login({
        email: formData.email,
        password: formData.password,
      });

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        // Handle navigation or other actions after successful login
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userAccount = await authService.createAccount(formData);

      if (userAccount) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        {activeUser ? (
        <div>
          <p>Hey {activeUser.name}</p>
        </div>
      ) : (
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login or Create Account
            </h2>
          </div>
        </div> )}
      </div>

<form className="mt-8 space-y-6">
  <div>
    <label htmlFor="email" className="sr-only">
      Email address
    </label>
    <input
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      required
      value={formData.email}
      onChange={handleInputChange}
      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder="Email address"
    />
  </div>
  <div>
    <label htmlFor="password" className="sr-only">
      Password
    </label>
    <input
      id="password"
      name="password"
      type="password"
      autoComplete="current-password"
      required
      value={formData.password}
      onChange={handleInputChange}
      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder="Password"
    />
  </div>
  <div>
    <label htmlFor="name" className="sr-only">
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      autoComplete="name"
      required
      value={formData.name}
      onChange={handleInputChange}
      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder="Name"
    />
  </div>
  <div>
    <button
      type="button"
      onClick={handleLogin}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Login
    </button>
    <button
      type="button"
      onClick={handleCreateAccount}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      Create Account
    </button>
  </div>
</form>



        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default LoginSignup;

