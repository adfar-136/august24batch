//Reactrcc

import React, { Component } from 'react'

export default class Comp1 extends Component {
    constructor(){
        super()
        this.state ={count:0}
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleIncrement(){
       this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>{this.props.username}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

