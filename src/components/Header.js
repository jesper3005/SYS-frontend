import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import HeaderStyle from '../styles/HeaderStyle.css'

const Header = () => {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/userPage">User page</NavLink></li>
            <li><NavLink activeClassName="active" to="/adminPage">Admin page</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
            <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>
        </ul>
    )
}
 
export default Header;

