import React, { Component } from 'react'

export default class Errorboundary extends Component {
    constructor(){
        super()
        this.state = {
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <div>
                <h1>Ooops ... Error</h1>
                <h1>There is a Error</h1>
            </div>
        )
    }
    return this.props.children
  }
}
