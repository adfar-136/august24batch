import Shop from "./Shop"

function Contact({firstName,secondName,age}){
    
    return <div>
        <p>Hello welcome</p>
        
        <Shop fName={firstName} sName={secondName} age={age}/>
    </div>
}

// export {Contact} //Named Export
export default Contact //default export