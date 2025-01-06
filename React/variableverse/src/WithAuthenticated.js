const withAuthenticated = (WrappedComponent)=>{
     return function EnhancedComponent({isAuthenticated,...props}){
       if(!isAuthenticated){
        return <h1>Please log in to access this page!</h1>
       }
       return <WrappedComponent {...props}/>
     }
}

export default withAuthenticated