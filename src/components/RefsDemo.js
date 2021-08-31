import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        // 1st method
        this.inputRef = React.createRef()

        // 2nd method
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        } 
    }
    
    componentDidMount(){
        // 1st method
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // 2nd method
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                {/* 1st method */}
                <input type="text" ref={this.inputRef}></input>
                {/* 2nd method */}
                <input type="text" ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
