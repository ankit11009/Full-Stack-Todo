import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout.jsx'
import Login from './Components/Login.jsx'
import { Register } from './Components/Register.jsx'
import { Dashboard } from './Components/Dashboard/Dashboard.jsx'
import axios from 'axios'
import { Todo } from './Components/Todo/Todo.jsx'




const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path:'/Register',
        element:<Register/>
      },
      {
        path:'/Login',
        element:<Login/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>,
      
      },
      {
        path:'/todo',
        element:<Todo/>,
         loader: async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/todo/get-todo', { 
        withCredentials: true 
      });

      // Log this to your BROWSER console to see the real structure
      console.log("Full Axios Response:", res);

      // We need to return the array. 
      // If res.data.data is undefined, we return []
      return res?.data?.data || []; 
      
    } catch (error) {
      console.error("Loader Error:", error);
      // Returning null or undefined causes the 'map' error. 
      // Returning [] keeps the app alive.
      return []; 
    }
  }
      }
     
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
