import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [counter,setCounter] = useState(0)
    useEffect(()=>{
        if(counter===15){
            throw new Error("App Damaged")
        }
    },[counter])
  return (
    <div>
       <h1>count : {counter}</h1>
       <button onClick={()=>setCounter(counter+1)}>++++</button>
    </div>
  )
}
