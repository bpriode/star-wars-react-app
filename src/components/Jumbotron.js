import React, {Component} from 'react';

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1>Star Wars</h1>
            <hr/>
            <h4>The Vehicles of Star Wars</h4>
          </div>
        </div>
      </div>
    )
  }
}
