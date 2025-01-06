import React, { useState } from 'react'
import useList from './useList'

export default function Addtodo() {
    const [text,setText] = useState("")
    const {todo,push,pull} = useList() 
    function handleSubmit(e){
        e.preventDefault()
        push(text)
        setText("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Task' value={text} 
            onChange={(e)=>setText(e.target.value)}/>
            <button type='submit'>Add Task</button>
            
        </form>
        <ul>
                <li>{todo.map((item,index)=><li>{item} <button onClick={()=>pull(index)}>Remove</button></li>)}</li>
            </ul>
    </div>
  )
}
