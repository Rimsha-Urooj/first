import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello',
        }

        // 3rd Approch :- Bind the event handler in the class constructor 
        this.clickHandler = this.clickHandler.bind(this)
    }
    

    // For 1 - 3 Approches
    // clickHandler(){
    //     this.setState({
    //         message: 'Good Bye',
    //     })
    // }


    // Arrow function as a class property method for 4th approch
    clickHandler = () => {
        this.setState({
            message: 'Good Bye',
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* First Approach :- Binding in render function */}
                {/* Use of 'bind' keyowrd to bind the event handler */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click (Event Binding)</button> */}

                {/* 2nd Approch :- Arrow function in render function*/}
                {/* Use Arrow Function in the {} and add () as we are calling a function and returning its value */}
                {/* <button onClick={() => this.clickHandler()}>Click (Event Binding)</button> */}

                {/* 3rd Approach :- Binding in the class construtor */}
                {/* Call the function without () in event handler */}
                {/* <button onClick={this.clickHandler}>Click (Event Binding)</button> */}

                {/* 4th Approach :- Class Property as an Arrow Function */}
                {/* Change the way you define your method in the class */}
                <button onClick={this.clickHandler}>Click (Event Binding)</button>
            </div>
        )
    }
}

export default EventBind
