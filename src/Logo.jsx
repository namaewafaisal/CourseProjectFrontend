import React from 'react'
import { Link } from 'react-router-dom' 

function Logo() {
  return (
    <div className='logo'> 
        <h1 ><Link to='/'>CourseFront</Link></h1>
    </div>
  )
}

export default Logo