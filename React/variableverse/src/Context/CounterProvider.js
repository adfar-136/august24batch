import React, { createContext, useState } from 'react'
let myContext = createContext()
export default function CounterProvider({children}) {
    const [count,setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
  return (
    <myContext.Provider value={{count,setCount,handleDecrement,handleIncrement}}>
         {children}
    </myContext.Provider>
  )
}
export {myContext}