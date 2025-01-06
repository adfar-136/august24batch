import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        console.log("constructor")
        this.state = {
            count:0,
            color:"red",
            status:""
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
        if(nextState.count >= 10){
            return false
        }
        return true
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("gdsfr")
    //     return {color:props.color}
    // }
    // componentDidMount(){
    //     setInterval(()=>{
    //         console.log("Adfar")
    //     },1000)
    // }
    componentDidUpdate(prevProps,prevState){
          console.log(prevProps ,prevState)
          if(prevState.count === 8){
            this.setState({status:"Congratulatons you have completed level 1"})
          }
    }
  render() {
    console.log("render")
    return (
      <div style={{backgroundColor:this.state.color}}>
        <h1>LifeCycle</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.status}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>count++</button>
      </div>
    )
  }
}
