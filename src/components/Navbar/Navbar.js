import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/latest-news" activeStyle>
                        Latest News
                    </NavLink>
                    <NavLink to="/matches" activeStyle>
                        Matches
                    </NavLink>
                    <NavLink to="/players" activeStyle>
                        Players
                    </NavLink>
                    <NavLink to="/clubs" activeStyle>
                        Clubs
                    </NavLink>
                    <NavLink to="/tables" activeStyle>
                        Tables
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/register" activeStyle>
                        Register
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;