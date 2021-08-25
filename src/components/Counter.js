import React, { Component } from 'react'

class Counter extends Component {
    // constructor
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    // Increment Function
    // based on current state
    increment(){
        this.setState({
            count: this.state.count+1
            },
            // callback arrow function 
            ()=> {
                console.log('Call back value ', this.state.count)
            }
        )
    }

    // increment based on previous state
    increase (){

        this.setState(
            (prevState,props)=>({
                count:prevState.count + 1
            })
        )

        console.log(this.state.count)


    }


    incrementFive (){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }

    render() {
        return (
            <div>
                <div>
                    {/* binding the state with UI */}
                    Count == {this.state.count}
                </div>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.incrementFive()}>Increment by Five</button>
            </div>
            
        )
    }
}

export default Counter
