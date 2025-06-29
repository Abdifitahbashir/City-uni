
import React from 'react'
import {  FaPlusSquare } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='bg-gray-800 shadow-mid justify-between items-center p-6 flex' >
      <h2 className= 'text-white font-semibold , sans-serif  text-center ml-185 ' > CITY UNIVERSITY OF MOGADISHU</h2>
      <span link to ="/Register" className='text-xl font-semibold text-white'><FaPlusSquare className='inline-block mr-2 '  />JOIN</span>
    </div>
  )
}

export default Navbar
    