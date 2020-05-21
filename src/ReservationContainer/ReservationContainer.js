import React, { Component } from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationContainer = (props) => {
  const reservationCards = props.reservations.map(reservation => {
    return (
      <ReservationCard
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    );
  });
  return <div className="reservation-container">{reservationCards}</div>;
};

export default ReservationContainer;
