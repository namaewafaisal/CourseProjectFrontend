import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
          <button
            type="submit"
            onClick={() => console.log("Login clicked")}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-purple-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
