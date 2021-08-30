import React from 'react'
// import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    // Keys in Array
    // Iterating with indexs

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skills: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Liana',
    //         age: 33,
    //         skills: 'Machine Learning'
    //     },
    //     {
    //         id: 3,
    //         name: 'David',
    //         age: 23,
    //         skills: 'Python'
    //     }
    // ]
    // Simple Approach
    // const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I am having skills in {person.skills}</h2>)
    
    // Refactoring person
    // Adding key props
    // const personList = persons.map(person=> <Person key={person.skills} person={person}/>)
    return (
        <div>
            {/* Simple Method */}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* Using map Approach i.e, List rendering approach */}
           
           {
               nameList
          }
        </div>
    )
}

export default NameList
