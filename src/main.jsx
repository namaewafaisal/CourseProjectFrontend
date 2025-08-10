import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Careers from './Careers.jsx'
import Courses from './Courses.jsx'
import Login from './Login.jsx' 
import Register from './Register.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/careers',
    element: <Careers/>
  },
  {
    path: '/courses',
    element: <Courses/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

    
