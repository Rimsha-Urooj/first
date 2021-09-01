import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }

            console.log(this.props.name)
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count+incrementNumber
                }
            })
        }

        render() {
            return <WrappedComponent 
                        count={this.state.count} incrementCount ={this.incrementCount} {...this.props}>
                    </WrappedComponent>
        }
    }
    return WithCounter
}

export default withCounter

// Basic Higher Order Component