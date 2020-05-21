import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationForm from "./ReservationForm";


describe('Reservation Form', () => {
it('should display the reservation inputs', () => {
  const { getByPlaceholderText } = render(<ReservationForm />);
  expect(getByPlaceholderText('Your Name')).toBeInTheDocument();
  expect(getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
  expect(getByPlaceholderText('How Many Guests')).toBeInTheDocument();
  expect(getByPlaceholderText('Time')).toBeInTheDocument();
});

it('should change value of form input to data put into form', () => {
  const { getByPlaceholderText, getByDisplayValue } = render(<ReservationForm />);
  fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: 'Olivia' } });
  fireEvent.change(getByPlaceholderText('Date (mm/dd)'), { target: { value: '02/19' } });
  fireEvent.change(getByPlaceholderText('How Many Guests'), { target: { value: '3' } });
  fireEvent.change(getByPlaceholderText('Time'), { target: { value: '5:30' } });
  expect(getByDisplayValue('Olivia')).toBeInTheDocument();
  expect(getByDisplayValue('02/19')).toBeInTheDocument();
  expect(getByDisplayValue('5:30')).toBeInTheDocument();
  expect(getByDisplayValue('3')).toBeInTheDocument();

 });
})
