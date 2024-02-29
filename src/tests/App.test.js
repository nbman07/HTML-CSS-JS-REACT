import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

import App from "../App.js";

import Home from '../pages/home.js';
import Actors from "../pages/actors";
import Films from "../pages/films";
import Categories from "../pages/categories";
import Login from "../pages/login";
import Register from "../pages/register";

import ActorPage from "../pages/actorPage";
import FilmPage from '../pages/filmPage';
import CategoryPage from '../pages/categoryPage';

import CreateActor from '../pages/create/createActor';
import CreateFilm from '../pages/create/createFilm';
import CreateCategory from '../pages/create/createCategory';

import EditActor from '../pages/edit/editActor';
import EditFilm from '../pages/edit/editFilm';
import EditCategory from '../pages/edit/editCategory';

import Navigation from "../components/navigation";
import SearchBar from '../components/SearchBar.js';
import RadioInput from '../components/radioInput.js';

afterEach(() => {
  cleanup();
})

/*** Rendering pages without issues ***/

describe("Rendering each page without issues", () => {

  test('renders the home page', () => {
    <MemoryRouter>
      render(<Home />);
    </MemoryRouter>
  });

  test('renders the actors page', () => {
    <MemoryRouter>
      render(<Actors />);
    </MemoryRouter>
  });

  test('renders the films page', () => {
    <MemoryRouter>
      render(<Films />);
    </MemoryRouter>
  });

  test('renders the categories page', () => {
    <MemoryRouter>
      render(<Categories />);
    </MemoryRouter>
  });

  test('renders the login page', () => {
    <MemoryRouter>
      render(<Login />);
    </MemoryRouter>
  });

  test('renders the register page', () => {
    <MemoryRouter>
      render(<Register />);
    </MemoryRouter>
  });

  test('renders a single actor page', () => {
    <MemoryRouter>
      render(<ActorPage />);
    </MemoryRouter>
  });
  test('renders a single film page', () => {
    <MemoryRouter>
      render(<FilmPage />);
    </MemoryRouter>
  });
  test('renders a single category page', () => {
    <MemoryRouter>
      render(<CategoryPage />);
    </MemoryRouter>
  });

  test('renders the create actor page', () => {
    <MemoryRouter>
      render(<CreateActor />);
    </MemoryRouter>
  });
  test('renders the create film page', () => {
    <MemoryRouter>
      render(<CreateFilm />);
    </MemoryRouter>
  });
  test('renders the create category page', () => {
    <MemoryRouter>
      render(<CreateCategory />);
    </MemoryRouter>
  });

  test('renders the edit actor page', () => {
    <MemoryRouter>
      render(<EditActor />);
    </MemoryRouter>
  });
  test('renders the edit film page', () => {
    <MemoryRouter>
      render(<EditFilm />);
    </MemoryRouter>
  });
  test('renders the edit category page', () => {
    <MemoryRouter>
      render(<EditCategory />);
    </MemoryRouter>
  });
})

/*** Rendering components without issues ***/

describe("Rendering components without issues", () => {
  
  test('renders the navigation bar', () => {
    <MemoryRouter>
      render(<Navigation />);
    </MemoryRouter>
  });
  test('renders the radio buttons', () => {
    <MemoryRouter>
      render(<RadioInput />);
    </MemoryRouter>
  });
  test('renders the search bar', () => {
    <MemoryRouter>
      render(<SearchBar />);
    </MemoryRouter>
  });

})

/*** Rendering elements on pages ***/

// /*** HOME PAGE ELEMENTS ***/
// describe("Home page has correct elements rendered", () => {

//   test('home page has a heading', () => {
//     render(<App />);
//     const elements = screen.getAllByRole("heading");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//     expect(elements[0]).toHaveTextContent("All Football");
//   });
//   test('home page has navigation', () => {
//     render(<App />);
//     const element = screen.getAllByRole("navigation");
//     expect(element.length).toBe(1);
//   });
//   test('home page has navigation bar links', () => {
//     render(<App />);
//     const elements = screen.getAllByRole("listitem");
//     expect(elements.length).toBeGreaterThanOrEqual(7);
//   });
//   test('home page has navigation links', () => {
//     render(<App />);
//     const elements = screen.getAllByRole("link");
//     expect(elements.length).toBeGreaterThanOrEqual(8);
//   });
//   test('home page has a search bar', () => {
//     render(<App />);
//     const element = screen.getAllByRole("searchbox");
//     expect(element.length).toBe(1);
//   });
//   test('home page has images', () => {
//     render(<App />);
//     const elements = screen.getAllByRole("img");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//   });
//   test('home page has 3 links to Latest News', () => {
//     render(<App />);
//     const elements = screen.getAllByText("Latest News", { exact: false });
//     expect(elements.length).toBe(3);
//   });
//   test('home page has 3 links to Matches', () => {
//     render(<App />);
//     const elements = screen.getAllByText("Matches", { exact: false });
//     expect(elements.length).toBe(3);
//   });
//   test('home page has 3 links to Players', () => {
//     render(<App />);
//     const elements = screen.getAllByText("Players", { exact: false });
//     expect(elements.length).toBe(3);
//   });
//   test('home page has 3 links to Clubs', () => {
//     render(<App />);
//     const elements = screen.getAllByText("Clubs", { exact: false });
//     expect(elements.length).toBe(3);
//   });
// });
// /*** LATEST NEWS PAGE ELEMENTS ***/
// describe("Latest News page has correct elements rendered", () => {
//   test('latest news page has a heading', () => {
//     render(<App />);
//     render(<LatestNews />);
//     const elements = screen.getAllByRole("heading");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//     expect(elements[0]).toHaveTextContent("Latest News");
//   });
//   test('latest news has navigation', () => {
//     render(<App />);
//     render(<LatestNews />);
//     const element = screen.getAllByRole("navigation");
//     expect(element.length).toBe(1);
//   });
//   test('latest news has navigation bar links', () => {
//     render(<App />);
//     render(<LatestNews />);
//     const elements = screen.getAllByRole("listitem");
//     expect(elements.length).toBeGreaterThanOrEqual(7);
//   });
//   test('latest news has navigation links', () => {
//     render(<App />);
//     render(<LatestNews />);
//     const elements = screen.getAllByRole("link");
//     expect(elements.length).toBeGreaterThanOrEqual(8);
//   });
//   test('latest news has a search bar', () => {
//     render(<App />);
//     render(<LatestNews />);
//     const element = screen.getAllByRole("searchbox");
//     expect(element.length).toBe(1);
//   });
//   test('latest news has images', () => {
//     render(<App />);
//     render(<LatestNews />);
//     const elements = screen.getAllByRole("img");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//   });
// });
// /*** MATCHES PAGE ELEMENTS ***/
// describe("Matches page has correct elements rendered", () => {
//   test('matches page has a heading', () => {
//     render(<App />);
//     render(<Matches />);
//     const elements = screen.getAllByRole("heading");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//     expect(elements[0]).toHaveTextContent("Matches");
//   });
//   test('matches page has navigation', () => {
//     render(<App />);
//     render(<Matches />);
//     const element = screen.getAllByRole("navigation");
//     expect(element.length).toBe(1);
//   });
//   test('matches page has navigation bar links', () => {
//     render(<App />);
//     render(<Matches />);
//     const elements = screen.getAllByRole("listitem");
//     expect(elements.length).toBeGreaterThanOrEqual(7);
//   });
//   test('matches page has a search bar', () => {
//     render(<App />);
//     render(<Matches />);
//     const element = screen.getAllByRole("searchbox");
//     expect(element.length).toBe(1);
//   });
//   test('matches page has images', () => {
//     render(<App />);
//     render(<Matches />);
//     const elements = screen.getAllByRole("img");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//   });
// });
// /*** PLAYERS PAGE ELEMENTS ***/
// describe("Players page has correct elements rendered", () => {
//   test('players page has a heading', () => {
//     render(<App />);
//     render(<Players />);
//     const elements = screen.getAllByRole("heading");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//     expect(elements[0]).toHaveTextContent("Players");
//   });
//   test('players page has navigation', () => {
//     render(<App />);
//     render(<Players />);
//     const element = screen.getAllByRole("navigation");
//     expect(element.length).toBe(1);
//   });
//   test('players page has navigation bar links', () => {
//     render(<App />);
//     render(<Players />);
//     const elements = screen.getAllByRole("listitem");
//     expect(elements.length).toBeGreaterThanOrEqual(7);
//   });
//   test('players page has a search bar', () => {
//     render(<App />);
//     render(<Players />);
//     const element = screen.getAllByRole("searchbox");
//     expect(element.length).toBeGreaterThanOrEqual(1);
//   });
//   test('players page has a table', () => {
//     render(<App />);
//     render(<Players />);
//     const elements = screen.getAllByRole("table");
//     expect(elements.length).toBeGreaterThanOrEqual(1);
//   });
//   test('players page has radio buttons', () => {
//     render(<App />);
//     render(<Players />);
//     const elements = screen.getAllByRole("radio");
//     expect(elements.length).toBe(3);
//   });
// });

// /*** LOGIN PAGE ELEMENTS ***/
// describe("Login page has correct elements rendered", () => {

//   test('login page has username input field', () => {
//     render(<App />);
//     render(<Login />);
//     const element = screen.getByText("Username");
//     expect(element).toBeInTheDocument();
//   });
//   test('login page has password input field', () => {
//     render(<App />);
//     render(<Login />);
//     const element = screen.getByText("Password");
//     expect(element).toBeInTheDocument();
//   });

//   test('login page has submit button', () => {
//     render(<App />);
//     render(<Login />);
//     const element = screen.getByRole("button");
//     expect(element).toBeInTheDocument;
//   });
// });
// /*** REGISTER PAGE ELEMENTS ***/
// describe("Register page has correct elements rendered", () => {

//   test('register page has username input field', () => {
//     render(<App />);
//     render(<Register />);
//     const element = screen.getByText("Username");
//     expect(element).toBeInTheDocument();
//   });
//   test('register page has password input field', () => {
//     render(<App />);
//     render(<Register />);
//     const passwordElement = screen.getByText("Password");
//     expect(passwordElement).toBeInTheDocument();
//   });
//   test('register page has submit button', () => {
//     render(<App />);
//     render(<Register />);
//     const element = screen.getByRole("button");
//     expect(element).toBeInTheDocument;
//   });
// });