import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Home from "../pages/home.js";
import LatestNews from "../pages/latest-news.js";
import Matches from "../pages/matches.js";
import Players from "../pages/players.js";
import Clubs from "../pages/clubs.js";
import Login from "../pages/login.js";
import Register from "../pages/register.js";
// import components
import Navigation from "../components/navigation.js";
import RadioInput from '../components/radio-input.js';
import ProcessRadioInput from '../process-radio-input.js';

import App from "../App.js";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
})

/*** Rendering pages without issues ***/

describe("Rendering each page", () => {

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
})

/*** Rendering elements on pages ***/

/*** HOME PAGE ELEMENTS ***/
describe("Home page has correct elements rendered", () => {

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
});
/*** LATEST NEWS PAGE ELEMENTS ***/
describe("Latest News page has correct elements rendered", () => {
  test('latest news page has a heading', () => {
    render(<App />);
    render(<LatestNews />);
    const elements = screen.getAllByRole("heading");
    expect(elements.length).toBeGreaterThanOrEqual(1);
    expect(elements[0]).toHaveTextContent("Latest News");
  });
  test('latest news has navigation', () => {
    render(<App />);
    render(<LatestNews />);
    const element = screen.getAllByRole("navigation");
    expect(element.length).toBe(1);
  });
  test('latest news has navigation bar links', () => {
    render(<App />);
    render(<LatestNews />);
    const elements = screen.getAllByRole("listitem");
    expect(elements.length).toBeGreaterThanOrEqual(7);
  });
  test('latest news has navigation links', () => {
    render(<App />);
    render(<LatestNews />);
    const elements = screen.getAllByRole("link");
    expect(elements.length).toBeGreaterThanOrEqual(8);
  });
  test('latest news has a search bar', () => {
    render(<App />);
    render(<LatestNews />);
    const element = screen.getAllByRole("searchbox");
    expect(element.length).toBe(1);
  });
  test('latest news has images', () => {
    render(<App />);
    render(<LatestNews />);
    const elements = screen.getAllByRole("img");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });
});
/*** MATCHES PAGE ELEMENTS ***/
describe("Matches page has correct elements rendered", () => {
  test('matches page has a heading', () => {
    render(<App />);
    render(<Matches />);
    const elements = screen.getAllByRole("heading");
    expect(elements.length).toBeGreaterThanOrEqual(1);
    expect(elements[0]).toHaveTextContent("Matches");
  });
  test('matches page has navigation', () => {
    render(<App />);
    render(<Matches />);
    const element = screen.getAllByRole("navigation");
    expect(element.length).toBe(1);
  });
  test('matches page has navigation bar links', () => {
    render(<App />);
    render(<Matches />);
    const elements = screen.getAllByRole("listitem");
    expect(elements.length).toBeGreaterThanOrEqual(7);
  });
  test('matches page has a search bar', () => {
    render(<App />);
    render(<Matches />);
    const element = screen.getAllByRole("searchbox");
    expect(element.length).toBe(1);
  });
  test('matches page has images', () => {
    render(<App />);
    render(<Matches />);
    const elements = screen.getAllByRole("img");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });
});
/*** PLAYERS PAGE ELEMENTS ***/
describe("Players page has correct elements rendered", () => {
  test('players page has a heading', () => {
    render(<App />);
    render(<Players />);
    const elements = screen.getAllByRole("heading");
    expect(elements.length).toBeGreaterThanOrEqual(1);
    expect(elements[0]).toHaveTextContent("Players");
  });
  test('players page has navigation', () => {
    render(<App />);
    render(<Players />);
    const element = screen.getAllByRole("navigation");
    expect(element.length).toBe(1);
  });
  test('players page has navigation bar links', () => {
    render(<App />);
    render(<Players />);
    const elements = screen.getAllByRole("listitem");
    expect(elements.length).toBeGreaterThanOrEqual(7);
  });
  test('players page has a search bar', () => {
    render(<App />);
    render(<Players />);
    const element = screen.getAllByRole("searchbox");
    expect(element.length).toBeGreaterThanOrEqual(1);
  });
  test('players page has a table', () => {
    render(<App />);
    render(<Players />);
    const elements = screen.getAllByRole("table");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });
  test('players page has radio buttons', () => {
    render(<App />);
    render(<Players />);
    const elements = screen.getAllByRole("radio");
    expect(elements.length).toBe(3);
  });
});
/*** CLUBS PAGE ELEMENTS ***/
describe("Clubs page has correct elements rendered", () => {

  test('clubs page has a heading', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getAllByRole("heading");
    expect(elements.length).toBeGreaterThanOrEqual(1);
    expect(elements[0]).toHaveTextContent("Clubs");
  });
  test('clubs page has navigation', () => {
    render(<App />);
    render(<Clubs />);
    const element = screen.getAllByRole("navigation");
    expect(element.length).toBe(1);
  });
  test('clubs page has navigation bar links', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getAllByRole("listitem");
    expect(elements.length).toBeGreaterThanOrEqual(7);
  });
  test('clubs page has navigation links', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getAllByRole("link");
    expect(elements.length).toBeGreaterThanOrEqual(8);
  });
  test('clubs page has a search bar', () => {
    render(<App />);
    render(<Clubs />);
    const element = screen.getAllByRole("searchbox");
    expect(element.length).toBe(1);
  });
  test('clubs page has images', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getAllByRole("img");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });
  test('clubs page has 2 dropdown lists', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getAllByRole("combobox");
    expect(elements.length).toBe(2);
  });
  test('clubs page has multiple options in dropdown lists', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getAllByRole("option");
    expect(elements.length).toBeGreaterThanOrEqual(4);
  });
  test('clubs page has a submit button', () => {
    render(<App />);
    render(<Clubs />);
    const elements = screen.getByRole("button");
    expect(elements).toBeInTheDocument();
    expect(elements).toHaveTextContent("Display teams");
  });
})
/*** LOGIN PAGE ELEMENTS ***/
describe("Login page has correct elements rendered", () => {

  test('login page has username input field', () => {
    render(<App />);
    render(<Login />);
    const element = screen.getByText("Username");
    expect(element).toBeInTheDocument();
  });
  test('login page has password input field', () => {
    render(<App />);
    render(<Login />);
    const element = screen.getByText("Password");
    expect(element).toBeInTheDocument();
  });

  test('login page has submit button', () => {
    render(<App />);
    render(<Login />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument;
  });
});
/*** REGISTER PAGE ELEMENTS ***/
describe("Register page has correct elements rendered", () => {

  test('register page has username input field', () => {
    render(<App />);
    render(<Register />);
    const element = screen.getByText("Username");
    expect(element).toBeInTheDocument();
  });
  test('register page has password input field', () => {
    render(<App />);
    render(<Register />);
    const passwordElement = screen.getByText("Password");
    expect(passwordElement).toBeInTheDocument();
  });
  test('register page has submit button', () => {
    render(<App />);
    render(<Register />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument;
  });
});

test("Testing", () => {
  <MemoryRouter>
    render(<Home/>);
  </MemoryRouter>
  userEvent.click(screen.getByText("e"),{exact:false});
  expect(window.location.href).toBe('http://localhost:3000/')
})


// CLICK ON ELEMENTS -> CALL FUNCTIONS

// fireEvent.click(latestNewsLink);
//navigation,list,listitem,link,searchbox,img,

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
