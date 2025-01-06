import React, { useRef, useState } from 'react'

export default function Ref() {
    const refH = useRef(0)
    const inputRef = useRef(null);
   function handleClick(){
    refH.current.innerHTML = "Please share and Subscribe"
    console.log(refH)
   }
   function handleBtn(){
    console.log(inputRef)
   }
  return (
    <div>
        <h1 ref={refH}>
            Adfar Rasheed
        </h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleBtn}>Focus</button>
        <h1>{refH.current.innerHTML}</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
