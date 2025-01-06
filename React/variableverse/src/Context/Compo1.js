import React, { useContext } from 'react'
import { myContext } from './CounterProvider'
export default function Compo1() {
  let {count} = useContext(myContext)
  return (
    <div>
        <h1>I am a Compo 1 {count}</h1>
    </div>
  )
}
