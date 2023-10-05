import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { UserContext } from '../context/UserContext'
function Header() {

  const context =useContext(UserContext)
  return (
    <>
   
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
    
 
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-1 justify-between   bg-gray-50 md:flex-row md:space-x-36 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
          {context.user?(context.user):('')}
        </li>
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
        </li>
      { context.user?(
        <li>
          <button onClick={()=>{context.setUser(null)}} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
        </li>
       ):( <ul className='flex flex-row space-x-11'> <li>
          <Link to="/signin" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signin</Link>
        </li>
        <li>
          <Link to="/signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</Link>
        </li></ul>
       )}
      </ul>
    </div>
  </div>
</nav>

     <Outlet />
     
</>
  )
}

export default Header
