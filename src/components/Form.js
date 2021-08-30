import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            comments:"",
            topic:"react",
        }
    }
    
    handleUserNameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange =(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault()
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>User name</label><br></br>
                  <input type="text" value={this.state.username} onChange={this.handleUserNameChange}></input>
                  <br></br>
              </div>
              <div>
                  <label> Comments</label><br></br>
                  <textarea type="text"  value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                  <br></br>
              </div>
              <div>
                  <label>Topics:  </label>
                  <select value={this.state.topic} onChange={this.handleTopicChange}>
                      <option value="react">React</option>
                      <option value="angular">Angular</option>
                      <option value="vue">Vue</option>
                  </select><br></br>
                  <br></br>
                  <button type="submit">Submit</button>
              </div>
          </form>
        )
    }
}

export default Form
