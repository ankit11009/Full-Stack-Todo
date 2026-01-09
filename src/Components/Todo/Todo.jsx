import React, { useState } from 'react'

export const Todo = () => {
    const [todo,setTodo]=useState("")
    
    

    const handleSubmit=async ()=>{
        e.preventDefault();
        try {
            const res=await axios.post('http://localhost:8000/api/v1/todo/create-todo',todo,{
                withCredentials:true,
                Headers:{
                     "Content-Type":"application/json"
                }
            })
        } catch (error) {
            
        }

    }

  return (
    <div>
        <form action="">
            <div className='flex justify-center mt-10 font-bold text-4xl'>
                <label htmlFor="">TODO</label>
            </div>
            <div className='flex justify-center mt-30'>
                <input className='border-2 w-150 p-4 rounded-xl  ' type="text" name="" id="" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                />
            <button 
            onClick={handleSubmit}
            className='bg-slate-700 p-4 text-2xl rounded-xl text-amber-50'>Add</button>
            </div>
        </form>
    </div>
  )
}
