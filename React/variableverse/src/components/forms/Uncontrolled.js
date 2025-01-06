import React, { useRef, useState } from 'react'

export default function Uncontrolled() {
  const [condition,setCondition] = useState(false)
  const nameRef =useRef(null)
  const emailRef = useRef(null);
  const passRef = useRef(null);
  function handleSubmit(e){
    e.preventDefault()
    setCondition(true)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
         <input type="text"  ref={nameRef}/>
         <input type="email" ref={emailRef} />
         <input type="password"  ref={passRef}/>
         <input type="submit" value="Submit" />
        </form>
        {condition && (
          <h1>{nameRef.current.value} {emailRef.current.value} {passRef.current.value}</h1>
        )}
        
    </div>
  )
}
//refs