import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>

        
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }} >Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>


<nav style={{ padding: "1rem", background: "#eee" }}>
      <NavLink 
        to="/" 
        style={{ marginRight: "1rem" }}
        className={({ isActive }) => 
          isActive ? "active-link" : "normal-link"
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
         style={{ marginRight: "1rem" }}
        className={({ isActive }) => 
          isActive ? "active-link" : "normal-link"
        }
      >
        About
      </NavLink>

      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          isActive ? "active-link" : "normal-link"
        }
      >
        Dashboard
      </NavLink>
    </nav>
{/* Navlink ma chai yeuta clasname deko hunxa jasle garda chai obvioulsy easily hamle active link xutauna sakinxa */}

      
    </div>
  )
}

export default Navbar
