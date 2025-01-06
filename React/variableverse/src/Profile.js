import React from 'react'
import withAuthenticated from './WithAuthenticated'
const User = ()=>{
  return <h1>Hello ADfar</h1>
}
const Hoc = withAuthenticated(User)
export default function Profile() {
  const isLogged = true;
  return (
    <div>
      <Hoc isAuthenticated={isLogged}/>
    </div>
  )
}
