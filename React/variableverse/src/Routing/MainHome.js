import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export default function MainHome() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate(-2)}>Back</button>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
