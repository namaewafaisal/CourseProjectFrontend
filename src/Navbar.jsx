import { Link, useLocation } from 'react-router-dom'
import React from 'react'

function Navbar() {
  const location = useLocation()

  const linkClass = (path) =>
    `px-2 no-underline ${
      location.pathname === path
        ? 'font-bold underline underline-offset-4 text-white'
        : 'hover:underline hover:underline-offset-4 text-text'
    }`

  return (
    <nav className="flex gap-4">
      <Link to="/" className={linkClass('/')}>
        Home
      </Link>
      <Link to="/careers" className={linkClass('/careers')}>
        Careers
      </Link>
      <Link to="/courses" className={linkClass('/courses')}>
        Courses
      </Link>
      <Link to="/about" className={linkClass('/about')}>
        About
      </Link>
    </nav>
  )
}

export default Navbar
