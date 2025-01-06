import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Fancyinput = forwardRef((props,ref)=>{
    const fancyRef = useRef(null)
    useImperativeHandle(ref,()=>({
        focus:()=>{
            fancyRef.current.focus()
        },
        disable:()=>{
            fancyRef.current.disabled = true
        },
        enable:()=>{
            fancyRef.current.disabled = false
        }
    }))
    return <input ref={fancyRef}/>
})
export default Fancyinput