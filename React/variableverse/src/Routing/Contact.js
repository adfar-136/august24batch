import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <Outlet/>
      <h1>i am parent contact component</h1>
      <button onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}
