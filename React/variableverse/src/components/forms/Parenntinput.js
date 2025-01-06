import React, { useRef } from 'react'
import Fancyinput from './Fancyinput'


export default function Parenntinput() {
    const inputRef = useRef(null)
  return (
    <div>
        <Fancyinput ref={inputRef} />
        <button onClick={()=>inputRef.current.focus()}>Focus</button>
        <button onClick={()=>inputRef.current.disable()}>Disable</button>
        <button onClick={()=>inputRef.current.enable()}>Enable</button>
        <button onClick={()=>console.log(inputRef)}>cLLLL</button>
        
    </div>
  )
}
