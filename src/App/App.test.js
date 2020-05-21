import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays new res with appropriate information when a user creates a reservation', async () => {
  const { getByText, getByPlaceholderText } = render(<App />)
  fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: 'Carole Baskin' } });
  fireEvent.change(getByPlaceholderText('Date (mm/dd)'), { target: { value: '12/11' } });
  fireEvent.change(getByPlaceholderText('Time'), { target: { value: '7:00' } });
  fireEvent.change(getByPlaceholderText('How Many Guests'), { target: { value: 2 } });
  fireEvent.click(getByText('Reserve'));
  const nameInfo = await waitFor(() => getByText('Carole Baskin'));
  const dateInfo = await waitFor(() => getByText('12/11'));
  const timeInfo = await waitFor(() => getByText('7:00'));
  const guestNumInfo = await waitFor(() => getByText('guests: 2'));
  expect(nameInfo).toBeInTheDocument();
  expect(dateInfo).toBeInTheDocument();
  expect(timeInfo).toBeInTheDocument();
  expect(guestNumInfo).toBeInTheDocument();
});
