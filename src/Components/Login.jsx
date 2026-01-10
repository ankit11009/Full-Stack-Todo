import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const navigate=useNavigate()

const [loginData,setLoginData]=useState({
    email:"",
    username:"",
    password:"",
})

const handleChange=(e)=>{
    const {name,value}=e.target
    setLoginData((prev)=>({
        ...prev,
        [name]:value
    }))
}

const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
        const res=await axios.post('http://localhost:8000/api/v1/users/login',
           loginData, 
            {
            withCredentials:true,
            headers:{
                "Content-Type":"application/json"
            },
          
        })
        if(res.status ==200){
            console.log("Login Succesfully",res.message);
            navigate('/todo')
            
        }
    } catch (error) {
        console.log("Something went wrong while login user",error?.respose?.data?.message || error.message);
        alert("Login Failed: Check your credentials");
        
    }
}



  return (
    <div>
    
        <div className='min-h-screen bg-linear-to-br from-gray-100 to-gray-300 flex justify-center p-40'>
            <form
            onSubmit={handleSubmit} 
            className='w-full max-w-lg  bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200'
            >
                <div className='flex  flex-col p-5 '>
                   <div className='flex justify-center'>
                     <label htmlFor="" className='text-3xl font-bold '>Login</label>
                   </div>
                <div className='flex justify-center p-1 '>
                    <div className='border w-14'></div>
                </div>
                </div>

                
                <div className='flex flex-col p-2 mt-15  '>
                    <label htmlFor="" className='text-sm font-semibold mb-1 ml-2'>Username</label>
                    <input type="text" name='username' placeholder='Username'
                    className='bg-gray-50 border border-gray-300 rounded-md p-3 focus:ring-1 focus:bg-blue-100 outline-none transition-all'
                    
                    value={loginData.username}
                    onChange={handleChange}/>
                    
                </div>
                <div className='flex flex-col p-2 '>
                    <label htmlFor="" className='text-sm font-semibold mb-1 ml-2'>Password</label>
                    <input type="password" name='password' placeholder='Password'
                    className='bg-gray-50 border border-gray-300 rounded-md p-3 focus:ring-1 focus:bg-blue-100 outline-none transition-all'
                    value={loginData.password}
                    onChange={handleChange}
                    />
                </div>

                <div className='p-4'>
                    <button
                    value="submit"
                    className='w-full bg-blue-300 hover:bg-blue-500 transition-color shadow-lg active:scale-[0.98] p-3 rounded-2xl text-2xl'
                    >Login</button>
                </div>
            </form>
        </div>
   
    </div>
  )
}

export default Login