import { useState } from "react"

const useList = ()=>{
    const [todo,setTodo] = useState(["HTML","CSS","JS"])
    const push=(input)=>{
        if(input.length>0){
            const newList = todo.concat(input)
            setTodo(newList)
        }
      
    }
    const pull =(i)=>{
      const newList = todo.filter((item,index)=>{
        return i !== index;
      })
      setTodo(newList)
    }
    return {
        todo,
        push,
        pull
    }
}
export default useList;