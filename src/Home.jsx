import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import CareersList from './CareersList'
import CoursesList from './CoursesList'
import Dashboard from './Dashboard.jsx'

function Home() {
  const isLoggedIn = true;
  return (
    <>
      <Header/>
      {isLoggedIn ? <Dashboard/> : null}
      <CareersList/>
      <CoursesList/>
    </>
  )
}

export default Home
