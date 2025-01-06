import React, { useReducer, useState } from 'react'
const reducer =(state,action)=>{
    switch(action.type){
        case "increment":
            return {count:state.count+action.payload}
        case "decrement":
            return {count:state.count - action.payload}
        case "incrementt":
            return {count:state.count+action.payload}
        case "decrementt":
            return {count:state.count - action.payload}
        default:
            return state
    }
}
export default function Reducer() {
    // const [count,setCount] = useState()
    const [state,dispatch] = useReducer(reducer,{count:0})
    console.log(state)
  return (
    <div>
      <h1>count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"increment",payload:1000})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement",payload:100000})}>Decrement</button>
      <button onClick={()=>dispatch({type:"incrementt",payload:100000})}>Increment++</button>
      <button onClick={()=>dispatch({type:"decrementt",payload:10000000})}>Decrement++</button>
    </div>
  )
}

//1. view => actions => dispatch (payload) = > reducer(function) => state =>view
