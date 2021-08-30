import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    // First Life cycle method i.e., constructor
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Rimsha'
        }
        console.log('Lifecycle A constructor')
    }
    

    // 2nd method of Lifecycle i.e, static method it has access to props and state to return new state or null
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDrivedStateFrompProps")
        return null
    }

    // 4th method of Lifecycle i.e, componentDidMount
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    // 3rd method of lifecycle 
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <LifeCycleB />
            </div>
            
        )
    }
}

export default LifeCycleA
