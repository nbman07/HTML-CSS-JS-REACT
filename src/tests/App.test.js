import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

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
