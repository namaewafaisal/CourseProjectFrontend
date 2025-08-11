import React from 'react'
import { Link } from 'react-router-dom' 

function Logo() {
  return (
    <div> 
        <Link to='/'><img src="src/assets/logo2.png" alt="CourseFront Logo" className='w-[200px] h-[50px] object-cover'/></Link>
    </div>
  )
}

export default Logo