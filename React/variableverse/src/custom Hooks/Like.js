import React from 'react'
import useCounter from './useCounter'

export default function Like() {
    const {count,increment} = useCounter()
  return (
    <div>
        <h1 onClick={()=>increment()}>Like : {count}</h1>
    </div>
  )
}
