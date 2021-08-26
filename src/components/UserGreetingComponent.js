import React, { Component } from 'react'

class UserGreetingComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // 1st approch If-Else
        // if(this.state.isLoggedIn){
        //     return <div>Welcome RIMSHA</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // 2nd Aproach Element Variables
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome RIMSHA UROOJ</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 3rd Approach :- Use of Ternary Operators
        // return(
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Rimsha Urooj</div>
        //     ) : (
        //     <div>Welcome GUEST</div>
        //     )
        // ) 
        
        // 4th Approach:- Short circuit operator 
        // When you want to render either something or nothing use short circuit approach
        return this.state.isLoggedIn && <div>Welcome Mahoor </div>
    }
}

export default UserGreetingComponent
