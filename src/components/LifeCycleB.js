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

    
    // 2nd method of component update lifecycle
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }

    // 4th method of comp update lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapShotBeforeUpdate');
        return null
    }

     // 5th method of component update lifecycle
     componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
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
