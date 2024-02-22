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

/*** Rendering pages without issues ***/

test('renders the home page', () => {
  render(<App />);
});

test('renders the latest news page', () => {
  render(<App />);
  render(<LatestNews />);
  // render(<Home/>);
});

test('renders the matches page', () => {
  render(<App />);
  render(<Matches />);
});

test('renders the players page', () => {
  render(<App />);
  render(<Players />);
});

test('renders the clubs page', () => {
  render(<App />);
  render(<Clubs />);
});

test('renders the login page', () => {
  render(<App />);
  render(<Login />);
});

test('renders the register page', () => {
  render(<App />);
  render(<Register />);
});

/*** HOME PAGE ELEMENTS ***/

/*** Rendering elements on pages ***/

test('home page has a heading', () => {
  render(<App />);
  const elements = screen.getAllByRole("heading");
  expect(elements.length).toBeGreaterThanOrEqual(1);
  expect(elements[0]).toHaveTextContent("All Football");
});
test('home page has navigation', () => {
  render(<App />);
  const element = screen.getAllByRole("navigation");
  expect(element.length).toBe(1);
});
test('home page has navigation bar links', () => {
  render(<App />);
  const elements = screen.getAllByRole("listitem");
  expect(elements.length).toBeGreaterThanOrEqual(7);
});
test('home page has navigation links', () => {
  render(<App />);
  const elements = screen.getAllByRole("link");
  expect(elements.length).toBeGreaterThanOrEqual(8);
});
test('home page has a search bar', () => {
  render(<App />);
  const element = screen.getAllByRole("searchbox");
  expect(element.length).toBe(1);
});
test('home page has images', () => {
  render(<App />);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBeGreaterThanOrEqual(1);
});
test('home page has 3 links to Latest News', () => {
  render(<App />);
  const elements = screen.getAllByText("Latest News", { exact: false });
  expect(elements.length).toBe(3);
});
test('home page has 3 links to Matches', () => {
  render(<App />);
  const elements = screen.getAllByText("Matches", { exact: false });
  expect(elements.length).toBe(3);
});
test('home page has 3 links to Players', () => {
  render(<App />);
  const elements = screen.getAllByText("Players", { exact: false });
  expect(elements.length).toBe(3);
});
test('home page has 3 links to Clubs', () => {
  render(<App />);
  const elements = screen.getAllByText("Clubs", { exact: false });
  expect(elements.length).toBe(3);
});

/*** LATEST NEWS PAGE ELEMENTS ***/

test('latest news page has a heading', () => {
  render([<App />, <LatestNews />]);
  const elements = screen.getAllByRole("heading");
  expect(elements.length).toBeGreaterThanOrEqual(1);
  expect(elements[0]).toHaveTextContent("Latest News");
});
test('latest news has navigation', () => {
  render([<App />, <LatestNews />]);
  const element = screen.getAllByRole("navigation");
  expect(element.length).toBe(1);
});
test('latest news has navigation bar links', () => {
  render([<App />, <LatestNews />]);
  const elements = screen.getAllByRole("listitem");
  expect(elements.length).toBeGreaterThanOrEqual(7);
});
test('latest news has navigation links', () => {
  render([<App />, <LatestNews />]);
  const elements = screen.getAllByRole("link");
  expect(elements.length).toBeGreaterThanOrEqual(8);
});
test('latest news has a search bar', () => {
  render([<App />, <LatestNews />]);
  const element = screen.getAllByRole("searchbox");
  expect(element.length).toBe(1);
});
test('latest news has images', () => {
  render([<App />, <LatestNews />]);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBeGreaterThanOrEqual(1);
});

/*** MATCHES PAGE ELEMENTS ***/

test('matches page has a heading', () => {
  render([<App />, <Matches />]);
  const elements = screen.getAllByRole("heading");
  expect(elements.length).toBeGreaterThanOrEqual(1);
  expect(elements[0]).toHaveTextContent("Matches");
});
test('matches page has navigation', () => {
  render([<App />, <Matches />]);
  const element = screen.getAllByRole("navigation");
  expect(element.length).toBe(1);
});
test('matches page has navigation bar links', () => {
  render([<App />, <Matches />]);
  const elements = screen.getAllByRole("listitem");
  expect(elements.length).toBeGreaterThanOrEqual(7);
});
test('matches page has a search bar', () => {
  render([<App />, <Matches />]);
  const element = screen.getAllByRole("searchbox");
  expect(element.length).toBe(1);
});
test('matches page has images', () => {
  render([<App />, <Matches />]);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBeGreaterThanOrEqual(1);
});

/*** PLAYERS PAGE ELEMENTS ***/
test('players page has a heading', () => {
  render([<App />, <Players />]);
  const elements = screen.getAllByRole("heading");
  expect(elements.length).toBeGreaterThanOrEqual(1);
  expect(elements[0]).toHaveTextContent("Players");
});
test('players page has navigation', () => {
  render([<App />, <Players />]);
  const element = screen.getAllByRole("navigation");
  expect(element.length).toBe(1);
});
test('players page has navigation bar links', () => {
  render([<App />, <Players />]);
  const elements = screen.getAllByRole("listitem");
  expect(elements.length).toBeGreaterThanOrEqual(7);
});
test('players page has a search bar', () => {
  render([<App />, <Players />]);
  const element = screen.getAllByRole("searchbox");
  expect(element.length).toBeGreaterThanOrEqual(1);
});
test('players page has a table',  () => {
  render([<App />, <Players />]);
  const elements = screen.getAllByRole("table");
  expect(elements.length).toBeGreaterThanOrEqual(1);
});
test('players page has radio buttons',  () => {
  render([<App />, <Players />]);
  const elements = screen.getAllByRole("radio");
  expect(elements.length).toBe(3);
});

/*** CLUBS PAGE ELEMENTS ***/
test('clubs page has a heading', () => {
  render([<App />, <Clubs />]);
  const elements = screen.getAllByRole("heading");
  expect(elements.length).toBeGreaterThanOrEqual(1);
  expect(elements[0]).toHaveTextContent("Clubs");
});
test('clubs page has navigation', () => {
  render([<App />, <Clubs />]);
  const element = screen.getAllByRole("navigation");
  expect(element.length).toBe(1);
});
test('clubs page has navigation bar links', () => {
  render([<App />, <Clubs />]);
  const elements = screen.getAllByRole("listitem");
  expect(elements.length).toBeGreaterThanOrEqual(7);
});
test('clubs page has navigation links', () => {
  render([<App />, <Clubs />]);
  const elements = screen.getAllByRole("link");
  expect(elements.length).toBeGreaterThanOrEqual(8);
});
test('clubs page has a search bar', () => {
  render([<App />, <Clubs />]);
  const element = screen.getAllByRole("searchbox");
  expect(element.length).toBe(1);
});
test('clubs page has images', () => {
  render([<App />, <Clubs />]);
  const elements = screen.getAllByRole("img");
  expect(elements.length).toBeGreaterThanOrEqual(1);
});
/*** LOGIN PAGE ELEMENTS ***/

/*** REGISTER PAGE ELEMENTS ***/

// CLICK ON ELEMENTS -> CALL FUNCTIONS


// fireEvent.click(latestNewsLink);
//navigation,list,listitem,link,searchbox,img,
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
