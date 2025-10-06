import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Paracomp from './components/Paracomp';
import Courses from './components/Courses';
import Reports from './components/Reports';
import NotFound from './components/NotFound';
const router = createBrowserRouter([
  {
    path:'/',
    element:
    <div>
      <Navbar />
      <Home />
    </div>
    

    
  },
  {
    path:'/about',
    element: 
    <div> 
      <Navbar />
      <About />
    </div>
  },
  {
    path:'/dashboard',
    element: 
    <div>
      <Navbar />
      <Dashboard />
    </div>,
    children:[
      {
        path:'courses',
        element:<Courses />
      },
      {
        path:'reports',
        element:<Reports />

      }
    ]
  },
  // {
  //   path:'/navbar',
  //   element: <Navbar />
  // }

  {
    path:"/students/:id",
    //id is the route paramenter
    element: <div>
      <Navbar />
      <Paracomp />
      </div>
  },
  {
    path:"*",
    element:<NotFound />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
