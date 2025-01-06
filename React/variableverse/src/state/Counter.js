import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    function handleClick(){
        setCount(x=>x+1)
        setCount(count+2)
        setCount(x=>x+2)
    }
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Add 4</button>
    </div>
  )
}

export default Counter