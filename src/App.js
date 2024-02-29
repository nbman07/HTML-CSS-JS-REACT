import React from 'react';
import './style.css'

import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";

// import pages
import Home from "./pages/home";
import Actors from "./pages/actors";
import Films from "./pages/films";
import Categories from "./pages/categories";
import Login from "./pages/login";
import Register from "./pages/register";

import ActorPage from "./pages/actorPage";
import FilmPage from './pages/filmPage';
import CategoryPage from './pages/categoryPage';

import CreateActor from './pages/create/createActor';
import CreateFilm from './pages/create/createFilm';
import CreateCategory from './pages/create/createCategory';

import EditActor from './pages/edit/editActor';
import EditFilm from './pages/edit/editFilm';
import EditCategory from './pages/edit/editCategory';

// import components
import Navigation from "./components/navigation";

export default function App() {
    return (
        <Router>
            <center>
                <h1 id="title">Films DB</h1>
            </center>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/actors" element={<Actors />} />
                <Route exact path="/films" element={<Films />} />
                <Route exact path="/categories" element={<Categories/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />

                <Route exact path="/actor/:id" element={<ActorPage />} />
                <Route exact path="/film/:id" element={<FilmPage />} />
                <Route exact path="/category/:id" element={<CategoryPage />} />

                <Route exact path="/actor/create" element={<CreateActor />} />
                <Route exact path="/film/create" element={<CreateFilm />} />
                <Route exact path="/category/create" element={<CreateCategory />} />

                <Route exact path="/actor/:id/update/" element={<EditActor />} />
                <Route exact path="/film/:id/update" element={<EditFilm />} />
                <Route exact path="/category/:id/update" element={<EditCategory />} />
            </Routes>
        </Router>
    );
}