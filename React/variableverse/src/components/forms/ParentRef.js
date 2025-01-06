import React, { useRef } from 'react'
import Child from './Child'

export default function ParentRef() {
    const btnRef = useRef(null)
    function handleClick(){
        console.log("Adfar")
        btnRef.current.textContent = "Hell world  Clicked"
    }
  return (
    <div>
        <h1>Forward Refs</h1>
        <Child ref={btnRef} onclick={handleClick}>
            click to focus
        </Child>
    </div>
  )
}
