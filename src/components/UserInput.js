import React, { Component } from 'react';

class UserInput extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={(event) => this.handleUsernameChange(event)}/><br />
          <label>Hometown: </label>
          <input
            type="text"
            value={this.state.hometown}
            onChange={(event) => this.handleHometownChange(event)}/><br />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
