import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return (
        <h2>
            Welcome {this.props.name} and your hero {this.props.heroName}
        </h2>
        )
    }

}

export default Welcome