import React from 'react'
import { useParams } from 'react-router-dom'

export default function UseDetails() {
    const {id} = useParams()
  return (
    <div>
        <h1>Details</h1>
        {id === "user1" && (
            <h1>I am Adfar Rasheed and my age is 27</h1>
        )}
         {id === "user2" && (
            <h1>I am Akash Mishra and my age is 24</h1>
        )}
         {id === "user3" && (
            <h1>I am Ankit kr and my age is 25</h1>
        )}
    </div>
  )
}
