import React from 'react'

function Dashboard() {
  return (
    <div  className=' grid-cols-1 md:grid-cols-2 gap-4 flex  -m-0.5 text-white'>
      <div className='flex '>
       <div className='bg-gray-900 shadow-border text-center pr-2'>
        <h1 className='text-white font-semibold text-xl text-center'  >TOTAL STUDENTS</h1>
        <span>260</span>
      </div>
      <div className='bg-gray-900 border-r-2 text-center ml-2'>
        <h1 className='text-white font-semibold text-xl text-center'  >TOTAL FINANCES</h1>
        <span>260</span>
      </div>
      </div>
        
    </div>
  )
}

export default Dashboard