import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Home from "../pages/home.js";
import LatestNews from "../pages/latest-news.js";
import Matches from "../pages/matches.js";
import Players from "../pages/players.js";
import Clubs from "../pages/clubs.js";
import Tables from "../pages/tables.js";
import Login from "../pages/login.js";
import Register from "../pages/register.js";
// import components
import Navigation from "../components/navigation.js";
import RadioInput from '../components/radio-input.js';
import ProcessRadioInput from '../process-radio-input.js';

import App from "../App.js";


test('renders the home page', () => {
  render(<App/>);
});

test('renders the latest news', () => {
  render(<App/>);
  render(<LatestNews/>);
  // expect(screen.getBy)
});
  // fireEvent.click(latestNewsLink);
  
  // const title = screen.getByTestId("title");

  // expect(title).toHaveTextContent("Latest News");


  // const { getByText } = render(<MyComponent message="Hello, World!" />);
  // const messageElement = getByText(/Hello, World!/i);
  // expect(messageElement).toBeInTheDocument();
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('loads and displays home screen', async () => {
//   render(<Fetch url="/" />)

//   await userEvent.click(screen.getByText('Load Greeting'))
//   await screen.findByRole('heading')

//   // ASSERT
//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
// })
