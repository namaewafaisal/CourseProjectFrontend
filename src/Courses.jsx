import React from 'react'
import Header from './Header.jsx'
function Courses() {
  return (
    <>
      <Header/>
      <div className='search-bar'>
         <input type="text" placeholder="Search courses"/>
      </div>
      <div>Courses</div>
    </>
  )
}

export default Courses