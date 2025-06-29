import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
  const [formData , setFormData] = useState({
            EmpID: "",
            Name : " ",
            Tell : "",
            Depart : "",
            semester : "",
            shift : ""
  })
  
  const [error , setError] = useState (null)
  const navigate = useNavigate();                //haddi xogta sax ay noqoto pageka list-ga ku xir


  const handleChange = (e)=>{                 /** intaan button walba dul tagi laheyn {target value} intan ayaa nosoo koobi doonta  */
    const {name , value} = e.target;
    setFormData({...formData, [name] : value});
  }


  const handleSubmit = async(e)=>{                     // intaan ugu muhimsan        
    e.preventDefault();                                       
    try{
      await axios.post("http://localhost:4000/api/insert/dhig",formData);
      alert("your action was successful");
      navigate('/lists');
    }catch(err){
      console.error("Failed to register",err);
      setError("Failed to register ")
    }
  }

  return (
      <div className="max-w w-6xl max-auto mt-10 ml-25 ">
      <h2 className="text-2xl font-bold mb-6 ml-125">STUDENT REGISTRATION</h2>
      {error && <p className='text-red-500'>{error}</p> }
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
          <label className="block text-sm font-medium text-gray-700">
            STD ID
          </label>
          <input type="text" name='EmpID' value={formData.EmpID} onChange={handleChange} placeholder="Enter your ID" className="mt-1 p-2 block w-full border border-gray-400 rounded-md"></input>
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">
             NAME
          </label>
          <input type="text" name='Name' value={formData.Name} onChange={handleChange} placeholder="Enter your Name" className="mt-1 p-2 block w-full border border-gray-400 rounded-md"></input>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
            TELL
          </label>
          <input type="text" name='Tell' value={formData.Tell} onChange={handleChange} placeholder="Enter your Phone" className="mt-1 p-2 block w-full border border-gray-400 rounded-md"></input>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
            DEPARTMENT
          </label>
          <input type="text" name='Depart' value={formData.Depart} onChange={handleChange} placeholder="Enter your Department" className="mt-1 p-2 block w-full border border-gray-400 rounded-md"></input>
          </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
            SEMESTER
          </label>
          <input type="text" name='semester' value={formData.semester} onChange={handleChange} placeholder="Enter your Semester" className="mt-1 p-2 block w-full border border-gray-400 rounded-md"></input>
          </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
            SHIFT
          </label>
          <input type="text" name='shift' value={formData.shift} onChange={handleChange} placeholder="Enter your Shift" className="mt-1 p-2 block w-full border border-gray-400 rounded-md"></input>
          </div>
        </div>
        <button type='submit' className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded-md flex items-center justify-center">REGISTER STUDENT</button>
      </form>
    </div>
  )
}

export default Register
