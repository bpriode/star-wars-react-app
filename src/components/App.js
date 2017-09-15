import React, {Component} from 'react';
import '../styles/App.css';

import Jumbotron from "./Jumbotron.js"
import Form from "./Form.js"
import VehicleCard from "./VehicleCards.js"

class App extends Component {
  constructor() {
    super();

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


  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json()
    .then((data) => {
      this.setState({vehicles: data.results})
    })
  )
}


  render() {

  let vehicles = this.state.vehicles.map((vehicle, index) => {
    return (<VehicleCard key={index + 1} vehicles={vehicle}/>)
  })

  return(
    <div className="App">
      <Jumbotron />
      <Form />
      <div className="row">
      {vehicles}
      </div>
    </div>
    )
  }
}



export default App;
