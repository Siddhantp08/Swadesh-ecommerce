import React from 'react';

const Login = () => {
  return (
    <div className="container mx-auto p-6 flex justify-center">
      <form className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input type="email" placeholder="Email" className="input mb-4" />
        <input type="password" placeholder="Password" className="input mb-4" />
        <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
