import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* Grabbing the hold of passed reference from parent component  => props.greetHandler*/}
            {/* passing props to the parent component from child component using arrow function */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
