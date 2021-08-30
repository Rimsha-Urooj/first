import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    // Styling through props
    let className = props.primary ? 'primary' : ''
    return (
        // using template literals for using multiple classes for styling
        <div className={` ${className} font-xl`}>
            <h1>Style Sheet</h1>
        </div>
    )
}

export default Stylesheet
