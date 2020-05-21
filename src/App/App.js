import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import ReservationForm from '../ReservationForm/ReservationForm.js'

class App extends Component {
  constructor() {
  super();
  this.state = {
    reservations: []
  }
}

componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data =>  this.setState({ reservations: data }))
    .catch(error => console.log(error.message))
}


addReservation = (reservation) => {
  this.setState({ reservations: [...this.state.reservations, reservation] })
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationForm addReservation={this.addReservation}/>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
        <ReservationContainer
        reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
