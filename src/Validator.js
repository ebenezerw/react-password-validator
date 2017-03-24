import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: " ",
      password:  " ",
      passwordConfirm: " ",
      valid: true
    }
  }

  handleEmail (event){
    this.setState({
      email: event.target.value
    })
  }

  handlePassword (event){
    this.setState({
      password: event.target.value
    })
  }

  handlePasswordConfirm (event){
    this.setState({
      passwordConfirm: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.checkValidity()
  }

  checkValidity (){
    if (this.state.password === this.state.passwordConfirm && this.state.email.includes("@")) {
      this.setState({valid: true})

    } else {
      this.setState({valid: false})

    }
  }

  render() {
    let validText = this.state.valid ? "Passwords Match!" : "Passwords do not match! or Email format is invalid"


    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(event) => this.handleEmail(event)} type="text" placeholder="email" />
        <input onChange={(event) => this.handlePassword(event)} type="password" placeholder="password" />
        <input onChange={(event) => this.handlePasswordConfirm(event)} type="password" placeholder="confirm password" />
        <input onClick={(event) => this.handleSubmit(event)} type="submit" value="Submit" />
        <h5>{validText}</h5>
      </div>
    );
  }
}

export default Validator;


// handleClick (event) {
//   let newBody = prompt("What should the new content be?")
//   this.setState({
//     body: newBody
//   })
// }
