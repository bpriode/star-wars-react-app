import React, {Component} from 'react';



export default class VehicleCard extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-block">
            <h2 className="card-title">Vehicle: {this.props.vehicles.name}</h2>
            <h4>Model: {this.props.vehicles.model}</h4>
          </div>
          <div className="card">
            <div className="card-block">
              <h3>Specs</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Manufacturer: {this.props.vehicles.manufacturer}</li>
                  <li className="list-group-item">Class: {this.props.vehicles.vehicle_class}</li>
                  <li className="list-group-item">Passengers: {this.props.vehicles.passengers}</li>
                  <li className="list-group-item">Crew: {this.props.vehicles.crew}</li>
                  <li className="list-group-item">Length: {this.props.vehicles.length}</li>
                  <li className="list-group-item">Max Speed: {this.props.vehicles.max_atmosphering_speed}</li>
                  <li className="list-group-item">Cargo Capacity: {this.props.vehicles.cargo_capacity}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
