import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import Logo from './Logo'

function Header() {
  return (
    <div className='header'>
    <Logo/>
    <Navbar/>
    <Profile/>
    </div>
)
}

export default Header