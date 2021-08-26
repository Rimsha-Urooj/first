import React from 'react'


// Normal Function
// function Greet(){
//     return <h1>Hey Rimsha</h1>
// }

// Arrow Function

// Destructing props in function parameter
const Greet = ({name,heroName}) => {
    return (
        <div>
            <h1>Greetings {name} your hero is {heroName}</h1>
            {/* {props.children} */}
        </div>
         
    )
}

// Two way to destructure.. 
// 1. is applied above which is destructure it in the function parameter
// => const Greet =(props) => {} transformed into => const Greet=({name, heroName})=> {}
// 2. is to destructure in function body
// => const Greet = (props) =>{
//      const {name, heroName} = props;
// }

export default Greet