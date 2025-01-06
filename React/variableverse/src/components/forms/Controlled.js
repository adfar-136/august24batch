import React, { useState } from 'react'

export default function Controlled() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const [condition,setCondition] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        setCondition(true)
        // setFormData((prev)=>({...prev,email:""}))
    }
    function handleChange(e){
     setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.name} name='name'
            onChange={handleChange}
            /> <br /> <br />
            <input type="email" value={formData.email} name='email'
            onChange={handleChange}
            /> <br /> <br />
            <input type="number" value={formData.phone} name='phone'
            onChange={handleChange}
            /> <br /> <br />
            <input type="password" value={formData.password} name='password'
            onChange={handleChange}
            /> <br /> <br />
            <input type="submit" value="Submit" />
            {condition && (
                <h1>{formData.name} {formData.email}</h1>
            )}
        </form>
    </div>
  )
}
