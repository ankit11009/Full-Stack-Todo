import React, { useState } from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import { useRevalidator } from 'react-router-dom'
import Navbar from '../Navbar'


export const Todo = () => {
    const [todo,setTodo]=useState("")
    const revalidator= useRevalidator()
    


    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const response=await axios.post('http://localhost:8000/api/v1/todo/create-todo',{todo:todo},{
                withCredentials:true,
                headers:{
                     "Content-Type":"application/json"
                }
            }
        )
        revalidator.revalidate()

            if(response.status==200){
                console.log("Todo added Succesfully");
                setTodo(" ")
                
            }
        } catch (error) {
            console.log("Cant add todo",error);
            alert("Failed to add todo")
            
        }

    }

  return (
    <div>
        <Navbar/>
        <form action="">
            <div className='flex justify-center mt-10 font-bold text-4xl'>
                <label htmlFor="">TODO</label>
            </div>
            <div className='flex justify-center mt-5'>
                <input className='border-2 w-150 p-4 rounded-xl  ' type="text" name="" id="" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                />
            <button 
            onClick={handleSubmit}
            className='bg-slate-700 p-4 text-2xl rounded-xl text-amber-50'>Add</button>
            </div>
        </form>
        <TodoList/>
    </div>
  )
}
