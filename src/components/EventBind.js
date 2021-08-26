import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello',
        }

        // 3rd Approch :- Bind the event handler in the constructor
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message: 'Good Bye',
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* First Approach */}
                {/* Use of 'bind' keyowrd to bind the event handler */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click (Event Binding)</button> */}

                {/* 2nd Approch */}
                {/* Use Arrow Function in the {} and add () as we are calling a function and returning its value */}
                {/* <button onClick={() => this.clickHandler()}>Click (Event Binding)</button> */}

                {/* 3rd Approach */}
                {/* Call the function without () in event handler */}
                <button onClick={this.clickHandler}>Click (Event Binding)</button>
            </div>
        )
    }
}

export default EventBind
