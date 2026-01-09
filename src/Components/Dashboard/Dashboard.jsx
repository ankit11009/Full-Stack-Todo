import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {

  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/todo")
  }

  return (
    <div className='bg-linear-to-r from-cyan-100 to-blue-00'>
    <Navbar/>
    <div>
       <div className='flex'>
        <div className='w-[50%] '>
           <div className='p-15 flex justify-center'>
           <img className='w-110' src="https://images.pexels.com/photos/35390504/pexels-photo-35390504.png" alt="" />
        </div>
        </div>
        <div className='  w-[50%] flex justify-center items-center '>
          <div className='font-semibold text-3xl p-5 '>
            <p className=''>Stay FOCUSED on your highest priorities today. </p>
            <p>Small, consistent steps lead to massive results.</p>
            <p> Keep pushing forward and stay organized.</p>
            <button className='bg-amber-500 p-3 rounded-4xl font-bold w-30 mt-3 active:scale-95 transition-all active:bg-amber-400'
            onClick={handleSubmit}
            >
            Todo
          </button>
          </div>
         <div>
          
         </div>
        </div>
       </div>
    </div>
    </div>
  )
}
