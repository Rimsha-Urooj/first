import React from 'react'

function Hello (){
    // codse using JSX
    // return (
    //     <div>
    //         <h1>From Lahore</h1>
    //         <h2>Graduated</h2>
    //     </div>
    // )

    // Without using JSX
    // React library provides createElement method.

    return React.createElement(
        'div',
        {id:'first', style:{color:'blue'}}, 
        React.createElement('h1',null,'Hello User')
    );


}


export default Hello