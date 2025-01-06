import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './action'
export default function Counterrr() {
    const count = useSelector((state)=>state.count)
    console.log(count)
    const dispatch =useDispatch()
    
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
