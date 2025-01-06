import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal({isOpen,onClose,children}) {
 if(!isOpen) return null
  return ReactDOM.createPortal(
    <div style={modalStyles}>
        <div style={contentStyles}>
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    </div>,
    document.getElementById("modal-root")
  )
}

const modalStyles = {
    position:"fixed",
    top:"0",
    left:"0",
    right:"0",
    bottom:"0",
    backgroundColor:"rgba(0,0,0,0.5)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
const contentStyles ={
    backgroundColor:"#fff",
    borderRadius:"10px",
    padding:"30px"
}