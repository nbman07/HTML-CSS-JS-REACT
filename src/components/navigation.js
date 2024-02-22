import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul id="navigation">
                <li id="home-nav-bar"><Link to="/">Home</Link></li>
                <li id="latest-news-nav-bar"><Link to="/latest-news">Latest News</Link></li>
                <li id="matches-nav-bar"><Link to="/matches">Matches</Link></li>
                <li id="players-nav-bar"><Link to="/players">Players</Link></li>
                <li id="clubs-nav-bar"><Link to="/clubs">Clubs</Link></li>
                {/* <li id="tables-nav-bar"><Link to="/tables">Tables</Link></li> */}
                <div className="member_buttons">
                    <li id="search-nav-bar"><input type="search" id="search_bar" placeholder="Search..." />

                    </li>
                    <li id="login-nav-bar"><Link to="/login">Login</Link></li>
                    <li id="register-nav-bar"><Link to="/register">Register</Link></li>
                </div>
            </ul>
        </nav>
    );
}
export default Navigation;

