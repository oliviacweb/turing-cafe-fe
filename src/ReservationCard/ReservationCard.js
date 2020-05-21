import React, { Component } from 'react';
import './ReservationCard.css';

const ReservationCard = (props) => {
  return(
    <div className="res-card">
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>guests: {props.number}</p>
    </div>

  )
}

export default ReservationCard;
