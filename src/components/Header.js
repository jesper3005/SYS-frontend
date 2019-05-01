import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/HeaderStyle.css'

const Header = () => {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
            <li><NavLink activeClassName="active" to="/map">MAP</NavLink></li>
            <li><NavLink activeClassName="active" to="/userPage">USER PAGE</NavLink></li>
            <li><NavLink activeClassName="active" to="/adminPage">ADMIN</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">LOGIN</NavLink></li>
            <li><NavLink activeClassName="active" to="/register">SIGN UP</NavLink></li>
        </ul>
    )
}
 
export default Header;

