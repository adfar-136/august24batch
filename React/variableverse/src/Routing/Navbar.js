import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
        <nav>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/help">Help</NavLink>
            </li>
        </nav>
    </div>
  )
}
