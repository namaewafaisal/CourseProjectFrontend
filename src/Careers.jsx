import Header from './Header.jsx'
function Careers() {
  return (
    <>
      <Header/>
      <div className='flex justify-center m-10'>
         <input type="text" placeholder="Search careers" className='border border-[var(--text-color)] bg-[var(--bg-color)] text-[var(--text-color)] px-4 py-2 w-[500px] rounded-4xl text-center tracking-[4px] '/>
      </div>
      <div>Careers</div>
    </>
  )
}

export default Careers