import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul id="navigation">
                <li id="home-nav-bar"><Link to="/">Home</Link></li>
                <li id="actors-nav-bar"><Link to="/actors">Actors</Link></li>
                <li id="films-nav-bar"><Link to="/films">Films</Link></li>
                <li id="categories-nav-bar"><Link to="/categories">Categories</Link></li>
                <div className="member_buttons">
                    <li id="login-nav-bar"><Link to="/login">Login</Link></li>
                    <li id="register-nav-bar"><Link to="/register">Register</Link></li>
                </div>
            </ul>
        </nav>
    );
}
export default Navigation;

