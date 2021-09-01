import React, { Component } from 'react'

class ErrorBoundry extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }
    

    // 1st method of erro =r liecycle methods
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    // 2nd Method
    componentDidCatch(error, info){
        console.log(error);
        console.log(info)
    }

    render() {
       if(this.state.hasError){
           return <h1>Something went wrong!</h1>
       }
       else{
           return this.props.children
       }
    }
}

export default ErrorBoundry
