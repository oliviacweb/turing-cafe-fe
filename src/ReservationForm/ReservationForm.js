import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      date: '',
      time: '',
      number: 0,
    }
  }

  handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };


  render() {
      return (
        <form className='res-form'>
          <input
          className='reservation-input'
          placeholder='Your Name'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
          name='name' required/>
          <input
          className='reservation-input'
          placeholder='Date (mm/dd)'
          type='text'
          value={this.state.date}
          onChange={this.handleChange}
          name='date'
          required/>
          <input
          className='reservation-input'
          placeholder='Time'
          type='text'
          value={this.state.time}
          onChange={this.handleChange}
          name='time'
          required/>
          <input
          className='reservation-input'
          placeholder='How Many Guests'
          type='number'
          value={this.state.number}
          onChange={this.handleChange}
          name='number'
          required/>
          <button className='reservation-button'
          type='button'
          onClick={this.makeReservation}>Reserve
          </button>
        </form>
      )
    }
  }

  export default ReservationForm;
