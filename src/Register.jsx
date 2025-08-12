import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Register() {
  return (
    <>
      <Header />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create an Account</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Register
