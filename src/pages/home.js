import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import '../footballAPI.js'
import '../style.css'

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
// import pages
import LatestNews from "./latest-news.js";
import Matches from "./matches.js";
import Players from "./players.js";
import Clubs from "./clubs.js";
import Tables from "./tables.js";
import Login from "./login.js";
import Register from "./register.js";
// import components
import Navigation from '../navigation.js';

export function Header() {
  return <h1 id="title">All Football</h1>
}

function HomeNavigation() {
  // return (
  //   <>
  //     <ul id="navigation">
  //       <li><a href="index.html">Home</a></li>
  //       <li><a href="latest-news.html">Latest News</a></li>
  //       <li><a href="matches.html">Matches</a></li>
  //       <li><a href="players.html">Players</a></li>
  //       <li><a href="clubs.html">Clubs</a></li>
  //       <li><a href="tables.html">Tables</a></li>
  //       <div id="member_buttons">
  //         <li><input type="text" id="search_bar" placeholder="Search..." /></li>
  //         <li><a href="login.html" id="login_button">Login</a></li>
  //         <li><a href="register.html" id="register_button">Register</a></li>
  //       </div>
  //     </ul>
  //   </>
  // );
  return (
    <div>
      <Header />
        <Navigation />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/latest-news" element={<LatestNews />} />
          <Route exact path="/matches" element={<Matches />} />
          <Route exact path="/players" element={<Players />} />
          <Route exact path="/clubs" element={<Clubs />} />
          <Route exact path="/tables" element={<Tables />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}
function HomeLatestNews() {
  return (
    <>
      <center>
        <br />

        <a href="latest-news.html" className="sub-heading-labels">Latest News</a>

        <br /><br />

        <div id="news">
          <div className="news-articles">
            <a href="https://www.google.com/search?q=rasmus">
              <img border="0" src="latest-news-1.jpg" width="500" height="300" />
              <h3>Højlund with 5 goals in 5 games!</h3>
            </a>
          </div>
          <div className="news-articles">
            <a href="https://www.google.com/search?q=bukayo">
              <img border="0" src="latest-news-2.jpg" width="500" height="300" />
              <h3>Saka stars as Arsenal ease past West Ham!</h3>
            </a>
          </div>
          <div className="news-articles">
            <a href="https://www.google.com/search?q=erling">
              <img border="0" src="latest-news-3.jpg" width="500" height="300" />
              <h3>Haaland scores brace as title race heats up!</h3>
            </a>
          </div>
          <div className="news-articles">
            <a href="https://www.google.com">
              <img border="0" src="latest-news-4.jpg" width="500" height="300" />
              <h3>Sensational goal from Garnacho!</h3>
            </a>
          </div>
        </div>
        {/* <nav>

        <Link to="/latest-news" id="more-news-button">See more...
        </Link> 
        </nav> */}
      </center>
    </>
  );
}

function HomeMatches() {
  return (
    <>
      <a href="/matches" className="sub-heading-labels">Matches</a>
      <div id="matches">
        <div className="matches-layout">
          <div>
            <img src='logo192.png' />
            <p>Team A</p>
          </div>
          <div className="date-time-of-match">
            <p className="date-of-match">19/10/2023</p>
            <p className="time-of-match">15:00</p>
          </div>
          <div>
            <img src='logo192.png' />
            <p>Team B</p>
          </div>
        </div>
        <div className="matches-layout">
          <div>
            <img src='logo192.png' />
            <p>Team A</p>
          </div>
          <div className="date-time-of-match">
            <p className="date-of-match">19/10/2023</p>
            <p className="time-of-match">15:00</p>
          </div>
          <div>
            <img src='logo192.png' />
            <p>Team B</p>
          </div>
        </div>
        <div className="matches-layout">
          <div>
            <img src='logo192.png' />
            <p>Team A</p>
          </div>
          <div className="date-time-of-match">
            <p className="date-of-match">19/10/2023</p>
            <p className="time-of-match">15:00</p>
          </div>
          <div>
            <img src='logo192.png' />
            <p>Team B</p>
          </div>
        </div>
        <div className="matches-layout">
          <div>
            <img src='logo192.png' />
            <p>Team A</p>
          </div>
          <div className="date-time-of-match">
            <p className="date-of-match">19/10/2023</p>
            <p className="time-of-match">15:00</p>
          </div>
          <div>
            <img src='logo192.png' />
            <p>Team B</p>
          </div>
        </div>
        <div className="matches-layout">
          <div>
            <img src='logo192.png' />
            <p>Team A</p>
          </div>
          <div className="date-time-of-match">
            <p className="date-of-match">19/10/2023</p>
            <p className="time-of-match">15:00</p>
          </div>
          <div>
            <img src='logo192.png' />
            <p>Team B</p>
          </div>
        </div>
      </div>
    </>
  )
}
function HomePlayers() {
  return (
    <>
      <div id="players">
        <a href="latest-news.html" className="sub-heading-labels">Players</a>
      </div>
    </>
  )
}
function HomeClubs() {
  return (
    <>
      <div id="clubs">
        <a href="latest-news.html" className="sub-heading-labels">Clubs</a>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <section>
      {/* <Header /> */}
      {/* <HomeNavigation /> */}
      <center>
        {/* <HomeLatestNews /> */}
        <LatestNews/>
        <HomeMatches />
        <HomePlayers />
        <HomeClubs />
      </center>
    </section>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Home());