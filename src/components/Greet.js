import React from 'react'


// Normal Function
// function Greet(){
//     return <h1>Hey Rimsha</h1>
// }

// Arrow Function

const Greet = (props) => {
    return (
        <div>
            <h1>Greetings {props.name} your hero is {props.heroName}</h1>
            {props.children}
        </div>
         
    )
}

export default Greet