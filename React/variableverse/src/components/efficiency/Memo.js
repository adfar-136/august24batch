import React, { memo, useState } from 'react'

function Memo() {
    const [count,setCount] = useState(0)
    console.log("chld called")
  return (
    <div>
        <h1>Memorization</h1>
        <h1>{count} : MEmo</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default memo(Memo)

//memoization : 
// multiply(4,5) => 20
// multiply(5,6) =>30
//multiply(10,20) => 200
//multiply(10,20) => 200
//multiply(110,20) => 200
//multiply(110,20) => 200