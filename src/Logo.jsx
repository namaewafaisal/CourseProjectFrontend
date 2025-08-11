import React from 'react'
import { Link } from 'react-router-dom' 

function Logo() {
  return (
    <div className='logo'> 
        <Link to='/'><img src="src/assets/logo2.png" alt="CourseFront Logo" /></Link>
    </div>
  )
}

export default Logo