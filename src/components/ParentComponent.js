import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        // binding of the greetParent method using 3rd Approch of binding
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}` )
    }
    
    render() {
        return (
            <div>
                {/* Passing method's refernece to the child component as props */}
                <ChildComponent  greetHandler={this.greetParent} />
            </div> 
        )
    }
}

export default ParentComponent
