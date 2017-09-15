import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      values: '',
      pilot: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleNameChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      pilot: this.state.value,
      value: ''
    })
  }

  render() {
    return (
      <div className="card-block">
          <form onSubmit={this.handleSubmit} className="card w-85">
              <div className="col-md-4 offset-md-4">
                <label htmlFor="formGroupInput">What is your name Pilot?</label>
                <input onChange={this.handleNameChange} className="form-control" id="formGroupInput"  type="text" value={this.state.value} placeholder="Enter Your Name" />
                <button id="submit" type="submit">Submit</button>
              </div>
              <p>{this.state.pilot}</p>
          </form>
      </div>
    )
  }
}
