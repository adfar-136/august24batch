import React, { useContext } from 'react'
import { firstName,lastName } from '../App'
export default function Compo3() {
    const fname = useContext(firstName)
    const lname = useContext(lastName)
  return (
    <div>
        <h1>My firstName is {fname} and my last name is {lname}</h1>
      {/* <firstName.Consumer>
        {(fname)=>(
           <lastName.Consumer>
             {(lname)=>(
                <h1>My firstName is {fname} and my last name is {lname}</h1>
             )}
           </lastName.Consumer>
        )}
      </firstName.Consumer> */}
    </div>
  )
}
