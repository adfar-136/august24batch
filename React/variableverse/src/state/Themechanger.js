import React, { useState } from 'react'
import "./theme.css"
function Themechanger() {
    const [condition,setCondition] = useState(true)
    function handleClick(){
       setCondition(!condition)
    }
  return (
    <div style={{backgroundColor:condition?"black":"white"}}>
       <button onClick={handleClick}>{condition?"Light":"Dark"} Mode</button>
       <h1 style={{color:condition?"white":"black"}}>Hello Wold</h1>
    </div>
  )
}

export default Themechanger