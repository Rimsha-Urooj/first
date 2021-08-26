import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        // Destructuring props 
        const {name,heroName} = this.props;
        return (
        <h2>
            Welcome {name} and your hero {heroName}
        </h2>
        )
    }

}

export default Welcome

// Destructuring State
// const {state1, state2} = this.state;