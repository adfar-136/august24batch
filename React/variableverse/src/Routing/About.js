import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  function handleClick(){
    navigate("/contact")
  }
  return (
    <div>
      <h1>I am a about component</h1>
      <button onClick={handleClick}>Go to Contact</button>
    </div>
  )
}
