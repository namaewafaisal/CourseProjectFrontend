import React from 'react'
import Header from './Header.jsx'
function Courses() {
  return (
    <>
      <Header/>
      <div className='text-center m-10 '>
         <input type="text" placeholder="Search courses" className='border border-[var(--text-color)] bg-[var(--bg-color)] text-[var(--text-color)] px-4 py-2 w-[500px] rounded-4xl text-center tracking-[4px] '/>
      </div>
      <div>Courses</div>
    </>
  )
}

export default Courses