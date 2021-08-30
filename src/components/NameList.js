import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Liana',
            age: 33,
            skills: 'Machine Learning'
        },
        {
            id: 3,
            name: 'David',
            age: 23,
            skills: 'Python'
        }
    ]
    // Simple Approach
    // const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I am having skills in {person.skills}</h2>)
    
    // Refactoring person
    const personList = persons.map(person=> <Person person={person}/>)
    return (
        <div>
            {/* Simple Method */}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* Using map Approach i.e, List rendering approach */}
           
           {
               personList
          }
        </div>
    )
}

export default NameList
