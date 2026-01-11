import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { MdDelete,MdOutlineSystemUpdateAlt } from "react-icons/md";
const TodoList = () => {

    const data=useLoaderData()
  return (
    <div className='flex justify-center  p-10 text-2xl '>
        <div className=' border-2 rounded-2xl p-5 '>
            {
                data.map((todo)=>(
                    <div key={todo._id} className="flex justify-between p-4 border-b w-200">
                        <input type="checkbox" />
                        <span className="flex justify-start">
                            {todo.todo}
                        </span>
                      <div className='flex justify-around gap-3'>
                         <button><MdOutlineSystemUpdateAlt /></button>
                          <button>
                            <MdDelete />
                        </button>
                       
                      </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TodoList