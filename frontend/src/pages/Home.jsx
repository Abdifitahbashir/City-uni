import React from 'react'
import city from '/src/city.jpg'

function Home() {
  return (
    <div className='p-0'>
      <h5 className='m-12 ml-85 font-bold text-3xl'>WELCOME TO CITY UNIVERSITY OF MOGADISHU</h5>
      <img src={city} alt='cityLogo' className='h-116 w-150 hover:bg-emerald-800 ml-90'></img>
    </div>
  )
}

export default Home
