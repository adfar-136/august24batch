import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from "./reduxtool/counterSLice"
import { setUser,updateAge } from './reduxtool/userSlice'
export default function App() {
  const count = useSelector((state)=>state.counter.value)
  const user = useSelector((state)=>state.user);
  console.log(user)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Increment</button>
      <h1>Name : {user.name} </h1>
      <h1>Age : {user.age}</h1>
      <button onClick={()=>dispatch(setUser({name:"ADfar",age:28}))}>Set User</button>
      <button onClick={()=>dispatch(updateAge(32))}>Update Age</button>
    </div>
  )
}
