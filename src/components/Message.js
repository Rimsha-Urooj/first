import React, { Component } from 'react'

class Message extends Component{
    // constructor call
    constructor(){
        // calling the constructor of super class
        super()

        // creating state object
        this.state = {
            message : 'Welcome Visitor :)',
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thanks for Subscribing ;)'
        })
    }

    render(){
        return (
            <div>
                <h2>
                    {this.state.message}
                </h2>
                <button onClick={()=> this.changeMessage()}>Click Me ;)</button>
            </div>
        
        )
    }

}

export default Message