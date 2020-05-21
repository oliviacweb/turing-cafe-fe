import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationCard from "./ReservationCard";

it('Should display the correct information on the card', () => {
  const { getByText } = render(
    <ReservationCard
    name="Olivia"
    date="02/19"
    time="8:30"
    number="4"
    />
  );
  expect(getByText('Olivia')).toBeInTheDocument();
  expect(getByText('02/19')).toBeInTheDocument();
  expect(getByText('8:30')).toBeInTheDocument();
  expect(getByText('guests: 4')).toBeInTheDocument();
});
