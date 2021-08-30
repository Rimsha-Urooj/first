import React, { Component } from 'react'

class LifeCycleB extends Component {

    // First Life cycle method i.e., constructor
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Rimsha'
        }
        console.log('LifeCycleB constructor')
    }
    

    // 2nd method of Lifecycle i.e, static method it has access to props and state to return new state or null
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDrivedStateFrompProps")
        return null
    }

    // 4th method of Lifecycle i.e, componentDidMount
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    // 3rd method of lifecycle 
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
