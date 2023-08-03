import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios for API calls
import Link from 'next/link';
import loginImg from '../public/login.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Make API call to login endpoint
    Axios.post('https://comic.tuanndl.com/v1/auth/login', {
      email,
      password,
    })
      .then((response) => {
        // Handle successful login response here
        console.log('Login successful!', response.data);
      })
      .catch((error) => {
        // Handle login error here
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src="./login.jpg" alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4" onSubmit={handleLogin}>
          <h2 className="text-4xl font-bold text-center py-6">KOMIQ</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input
              className="border p-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white" type="submit">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>
              <Link href="/register">Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
