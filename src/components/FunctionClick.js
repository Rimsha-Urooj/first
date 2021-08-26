import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked');
    }
    return (
        <div>
            {/* Event Handler must be a function not a function call 
            use only function name in event not use () when calling a function*/}
            <button onClick={clickHandler}>Click</button>

        </div>
    )
}

export default FunctionClick
