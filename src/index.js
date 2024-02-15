import React from 'react';
import ReactDOM from 'react-dom/client';
import './footballAPI.js'
import './style.css'

function Header() {
  return <h1 id="title">All Football</h1>
}
function Navigation() {
  return (
    <>
      <ul id="navigation">
        <li><a href="index.html">Home</a></li>
        <li><a href="latest-news.html">Latest News</a></li>
        <li><a href="matches.html">Matches</a></li>
        <li><a href="players.html">Players</a></li>
        <li><a href="clubs.html">Clubs</a></li>
        <li><a href="tables.html">Tables</a></li>
        <div id="member_buttons">
          <li><input type="text" id="search_bar" placeholder="Search..." /></li>
          <li><a href="login.html" id="login_button">Login</a></li>
          <li><a href="register.html" id="register_button">Register</a></li>
        </div>
      </ul>
    </>
  );
}
function LatestNews() {
  return (
    <>
      <center>
        <br />

        <a href="latest-news.html" className="sub-heading-labels">Latest News</a>

        <br /><br />

        <div id="news">
          <a href="https://www.google.com/search?q=rasmus">
            <img border="0" src="latest-news-1.jpg" width="500" height="300" />
            <h3>Højlund with 5 goals in 5 games!</h3>
          </a>
          <a href="https://www.google.comsearch?q=bukayo">
            <img border="0" src="latest-news-2.jpg" width="500" height="300" />
            <h3>Saka stars as Arsenal ease past West Ham!</h3>
          </a>
          <a href="https://www.google.comsearch?q=erling">
            <img border="0" src="latest-news-3.jpg" width="500" height="300" />
            <h3>Haaland scores brace as title race heats up!</h3>
          </a>
          <a href="https://www.google.com">
            <img border="0" src="latest-news-4.jpg" width="500" height="300" />
            <h3>Sensational goal from Garnacho!</h3>
          </a>
        </div>
        <a href="latest-news.html" id="more-news-button">See more...</a>
      </center>
    </>
  );
}

function Matches() {
  return (
    <>
        <a href="latest-news.html" className="sub-heading-labels">Matches</a>
      <div id="matches">
        <div className="matches-layout">
          <div>
            <img src='logo192.png' />
            <p>Team A</p>
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
          <div>
            <img src='logo192.png' />
            <p>Team B</p>
          </div>
        </div>
      </div>
    </>
  )
}
function Players() {
  return (
    <>
      <div id="players">
        <a href="latest-news.html" className="sub-heading-labels">Players</a>
      </div>
    </>
  )
}
function Clubs() {
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
      <Header />
      <Navigation />
      <center>
        <LatestNews />
        <Matches />
        <Players />
        <Clubs />
      </center>
    </section>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Home());