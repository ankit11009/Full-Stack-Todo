import React, { useState } from 'react';
import { use } from 'react';

export const Register = () => {

const [formData,setFormData]=useState({
  fullName:"",
  email:"",
  username:"",
  password:""
});

const handleChange=(e)=>{

  const {name,value}=e.target;
  setFormData((prev)=>({
    ...prev,
    [name]:value
  }))
}

const handleSubmit=async (e)=>{
e.preventDefault()
  console.log(formData);
  
 try {
  const response = await fetch(`http://localhost:8000/api/v1/users/register`,{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify(formData)
  })
  
  
 } catch (error) {
  console.log("Something went wrong while Registeration");
  
 }
 
}




  return (
    // bg-gradient-to-br creates that professional grey look
    <div className='min-h-screen bg-linear-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4'>
        <form 
          onSubmit={handleSubmit}
          className='w-full max-w-lg bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200'
        >
          {/* Header Section */}
          <div className='bg-gray-800 p-6'>
            <h1 className='text-3xl font-bold text-center text-white'>Create Account</h1>
            <p className='text-gray-400 text-center text-sm mt-1'>Join our community today</p>
          </div>

          <div className='p-8 space-y-5'>
           
            <div className='flex flex-col'>
              <label className='text-sm font-semibold text-gray-600 mb-1 ml-1'>Full Name</label>
              <input 
                className='bg-gray-50 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all' 
                type="text" 
                name='fullName'
                placeholder='John Doe' 
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

               <div className='flex flex-col'>
              <label className='text-sm font-semibold text-gray-600 mb-1 ml-1'>Username</label>
              <input 
                className='bg-gray-50 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all' 
                type="text"
                name='username' 
                placeholder='' 
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-semibold text-gray-600 mb-1 ml-1'>Email Address</label>
              <input 
                className='bg-gray-50 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all' 
                type="email" 
                name='email'
                placeholder='name@company.com' 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-semibold text-gray-600 mb-1 ml-1'>Password</label>
              <input 
                className='bg-gray-50 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all' 
                type="password" 
                name='password'
                placeholder='••••••••' 
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className='pt-4'>
              <button 
              type='submit'
              className='w-full bg-gray-800 hover:bg-black text-white font-bold py-4 rounded-xl transition-colors shadow-lg active:scale-[0.98]'>
                Register Now
              </button>
            </div>
          </div>
        </form>
    </div>
  );
};