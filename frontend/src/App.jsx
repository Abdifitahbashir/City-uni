
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import ListEmployee from './pages/ListEmployee'
import Register from './pages/Register'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      
    <div className='flex h-64 w-screen' >
      <Sidebar></Sidebar>
      <div className='p-6' >
        
        <Routes>
          <Route path='/Dashboard'element={<Dashboard/>}></Route>
          <Route path='/Register'element={<Register/>}></Route>
          <Route path='/lists'element={<ListEmployee/>}></Route>
          <Route path='/Home'element={<Home/>}></Route>

        </Routes>
      </div>
      
    </div>
    
    </div>
  )
}

export default App


/*

import React from 'react'
import Cards from './Cards'

function App() {
  return (
    <Cards></Cards>
  )
}

export default App



import React from 'react'
import Students from './Students'

function App() {
  return (
    <Students name = "Bro code" age = {30} isStudent = {true} />
    )
}



export default App 

*/

