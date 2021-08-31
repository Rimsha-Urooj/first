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
    // 1st method in component updating
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDrivedStateFrompProps")
        return null
    }

    // 4th method of Lifecycle i.e, componentDidMount
    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    // 2nd method of component update lifecycle
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }

    // 4th method of comp update lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapShotBeforeUpdate');
        return null
    }

    // 5th method of component update lifecycle
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState= () =>{
        this.setState({
            name:'Codevolution'
        })
    }

    // 3rd method of lifecycle 
    // 3rd method of component update lifecycle
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
            
        )
    }
}

export default LifeCycleA
