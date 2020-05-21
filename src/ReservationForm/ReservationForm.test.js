import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationForm from "./ReservationForm";

it('should display the reservation inputs', () => {
  const { getByPlaceholderText } = render(<Form />);
  expect(getByPlaceholderText('Your Name')).toBeInTheDocument();
  expect(getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
  expect(getByPlaceholderText('How Many Guests')).toBeInTheDocument();
  expect(getByPlaceholderText('Time')).toBeInTheDocument();
});
