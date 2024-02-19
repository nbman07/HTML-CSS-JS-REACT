import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import displayLiveMatches from '../footballAPI.js';
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
function HomeLatestNews() {
  return (
    <>
      <center>
        <div id="latest-news">
          <Link to="/latest-news" className="sub-heading-labels">Latest News</Link>
        </div>
        <div id="news">
          <div className="news-articles">
            <a href="https://www.bbc.co.uk/sport/football/68120818">
              <img border="0" src="latest-news-1.jpg" width="500" height="300" />
              <h3>Højlund with 5 goals in 5 games!</h3>
            </a>
          </div>
          <div className="news-articles">
            <a href="https://www.bbc.co.uk/sport/football/68196268">
              <img border="0" src="latest-news-2.jpg" width="500" height="300" />
              <h3>Saka stars as Arsenal ease past West Ham!</h3>
            </a>
          </div>
          <div className="news-articles">
            <a href="https://www.bbc.co.uk/sport/football/68190261">
              <img border="0" src="latest-news-3.jpg" width="500" height="300" />
              <h3>Haaland scores brace as title race heats up!</h3>
            </a>
          </div>
          <div className="news-articles">
            <a href="https://www.bbc.co.uk/sport/football/67466093">
              <img border="0" src="latest-news-4.jpg" width="500" height="300" />
              <h3>Sensational goal from Garnacho!</h3>
            </a>
          </div>
        </div>

        <Link to="/latest-news" className="see-more-button">See more...
        </Link>
      </center>
    </>
  );
}

function HomeMatches() {

  return (
    <>
      <Link to="/matches" className="sub-heading-labels">Matches</Link>
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
      <Link to="/matches" className="see-more-button">See more...
      </Link>
    </>
  )
}
function HomePlayers() {
  return (
    <>
      <div id="players">
        <Link to="/players" className="sub-heading-labels">Players</Link>
      </div>
    </>
  )
}
function HomeClubs() {
  return (
    <>
      <div id="clubs">
        <Link to="/clubs" className="sub-heading-labels">Clubs</Link>
      </div>
    </>
  )
}

export default function Home() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Home"
  }, []);
  return (
    <section>
      <center>
        <br />
        <HomeLatestNews />
        <HomeMatches />
        <HomePlayers />
        <HomeClubs />
      </center>
    </section>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Home());