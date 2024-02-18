import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import './footballAPI.js'
import './style.css'

import {
  BrowserRouter as Router, Routes, Route, BrowserRouter
} from "react-router-dom";

// import pages
import Home from "./pages/home";
import LatestNews from "./pages/latest-news";
import Matches from "./pages/matches";
import Players from "./pages/players";
import Clubs from "./pages/clubs";
import Tables from "./pages/tables";
import Login from "./pages/login";
import Register from "./pages/register";
// import components
import Navigation from "./navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <center>
      <h1 id="title">All Football</h1>
    </center>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/latest-news" element={<LatestNews />} />
      <Route path="/matches" element={<Matches />} />
      <Route exact path="/players" element={<Players />} />
      <Route exact path="/clubs" element={<Clubs />} />
      <Route exact path="/tables" element={<Tables />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </Router>
)