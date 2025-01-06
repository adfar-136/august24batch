import React from 'react'
import { useParams } from 'react-router-dom'

export default function Phone() {
    let {id,ph} = useParams()
  return (
    <div>
        {(id === "user1" && ph === "7006") && (
            <h1>I am Adfar Rasheed and my phone number 7006525041</h1>
        )} 
        {(id === "user2" && ph === "6007") && (
            <h1>I am Aadil Rather and my phone number is 7006123456</h1>
        )}
    </div>
  )
}
