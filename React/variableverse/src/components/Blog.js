import React from 'react'

function Blog(props) {
  console.log(props)
  return (
    <div>
       {props.skills.map((item,index)=>{
           return <li key={index}>{item}</li>
       })}
       {props.obj.id}
       <hr />
       <br />
       <img src="" alt="" />
       <input type="text" />
    </div>
  )
}

export default Blog