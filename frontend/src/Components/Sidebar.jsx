import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaList, FaRegistered, FaUserClock, FaUserFriends, FaUserPlus } from 'react-icons/fa'

function Sidebar() { 
  return (
    <div className='bg-gray-800 w-64 h-screen p-6'>
      <h1 className='text-2xl text-white font-sans mb-8 p-1' >CITY UNIVERSITY</h1>
      <nav className='space-y-4'>
        <Link to = "/Home" className='text-2xl text-amber-100 font-sans hover:bg-green-900 block'><FaHome className='inline-block m-2'/>HOME</Link>
        <Link to = "/register" className='text-2xl text-amber-100 font-sans hover:bg-green-900 block'><FaUserPlus className='inline-block m-2'/>REGISTER</Link>
        <Link to = "/lists" className='text-2xl text-amber-100 font-sans hover:bg-green-900 block'><FaUserFriends className='inline-block m-2'/>STUDENTS</Link>
      </nav>

    </div>
  )
}

export default Sidebar 
