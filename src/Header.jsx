import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import Logo from './Logo'

function Header() {
  return (
    <div className='flex justify-between items-center p-3 px-5 border-b border-[var(--text-color)] bg-[var(--bg-color)] text-[var(--text-color)]'>
    <Logo/>
    <Navbar/>
    <Profile/>
    </div>
)
}

export default Header