import React, { useEffect, useState } from "react";
import axios from 'axios'
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


function ListEmployees(){
  const [employee ,setEmployee] = useState([])
    const fetchdata = async()=>{
      const response = await axios.get("http://localhost:4000/api/read/all")
      setEmployee(response.data)
    }

    useEffect(()=>{
      fetchdata()
    },[])
  
    const handleDelete = async(EmpID)=>{
      if (!window.confirm("Are you sure you want to delete the selected item?")) {
        return;
      }
      try{
        await axios.delete(`http://localhost:4000/api/delete/${EmpID}`);
        alert("Student successfully deleted");
        fetchdata();
      }catch(error){
        console.error("Error deleting Student",error);
        alert("Failed to delete Student , please try again")
      }
    }
  return(
    <div className='p-6 '>
      <div className="text-center ">
        <h2 className="text-2xl font-bold ">STUDENTS LIST</h2>
      </div>
      <div className="flex justify-between items-center my-4">
        <input type="text"
        placeholder="search by id"
        required
        className="px-4 py-2 border border-gray-600 rounded my-4"></input>
         <Link to = "/Register"  className="p-2 border rounded bg-teal-500 hover: bg-teal-600 text-white ml-215">ADD A NEW STUDENT</Link>

      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full mt-10 px-4 py-2 border-collapse border-gray-400">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-fuchsia-300 px-4 p-2 text-left">Std-ID</th>
              <th className="border border-fuchsia-300 px-4 p-2 text-left">Name</th>
              <th className="border border-fuchsia-300 px-4 p-2 text-left">Tell</th>
              <th className="border border-fuchsia-300 px-4 p-2 text-left">Department</th>
              <th className="border border-fuchsia-300 px-4 p-2 text-left">semester</th>
              <th className="border border-fuchsia-300 px-4 p-2 text-left">shift</th>
              <th className="border border-fuchsia-300 px-4 p-2 text-center">Action</th>

            </tr>
          </thead>
          <tbody>{employee.map((employee)=>(
            
             <tr>
              <td className="px-4 py-2 border-gray-400 border ">{employee.EmpID}</td>
              <td className="px-4 py-2 border-gray-400 border ">{employee.Name}</td>
              <td className="px-4 py-2 border-gray-400 border ">{employee.Tell}</td>
              <td className="px-4 py-2 border-gray-400 border ">{employee.Depart}</td>
              <td className="px-4 py-2 border-gray-400 border ">{employee.semester}</td>
              <td className="px-4 py-2 border-gray-400 border ">{employee.shift}</td>
              <td className="px-4 py-2 border-gray-400 border ">
                <div className="flex">
                <Link to = "/Update" className="text-shadow-teal-700 hover:text-emerald-800"><FaEdit/></Link>
                <button onClick={()=>handleDelete(employee.EmpID)} className="text-red-600 hover:text-red-400"><FaTrash/></button>

                </div>
              </td>

            </tr>
            
          ))}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
           
    </div>
  )
}

export default ListEmployees