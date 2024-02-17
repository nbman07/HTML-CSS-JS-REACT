import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul id="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/latest-news">Latest News</Link></li>
                <li><Link to="/matches">Matches</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/clubs">Clubs</Link></li>
                <li><Link to="/tables">Tables</Link></li>
                <div className="member_buttons">
                    <li><input type="text" id="search_bar" placeholder="Search..." /></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </div>
            </ul>
        </nav>
    );
}
export default Navigation;

