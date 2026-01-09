import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




const Navbar = () => {

const navigate=useNavigate()

const handleChange=(e)=>{
  e.preventDefault()
  navigate('/Register')
}

  return (
    <div className='bg-blue-400 p-4 '>
        <nav className='flex justify-around '>
           <div className=''>
            <label className='text-3xl font-semibold ' htmlFor="">Hello,{}</label>
           </div>
           <div>
            <div className=''>
             <Link className='p-2  rounded-xl font-semibold hover:bg-amber-300 text-xl' to="/Login">Login</Link>
              <button
              className=' bg-amber-100 p-2 ml-3 rounded-xl text-xl font-bold active:bg-amber-200 active:scale-95 transition-all'
              onClick={handleChange}
              >Get Started</button>
            </div>
           </div>
        </nav>
    </div>
  )
}

export default Navbar