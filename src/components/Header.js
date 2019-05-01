import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/HeaderStyle.css'

const Header = (props) => {
    const isLoggedIn = props.username;
    if(isLoggedIn) {
      return  <HeaderLoggedIn />
    }
    return <HeaderNotLoggedIn />

}
 
export default Header;

function HeaderLoggedIn(props) {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
            <li><NavLink activeClassName="active" to="/map">MAP</NavLink></li>
            <li><NavLink activeClassName="active" to="/userPage">USER PAGE</NavLink></li>
            <li><NavLink activeClassName="active" to="/adminPage">ADMIN</NavLink></li>
        </ul>
    )
}

function HeaderNotLoggedIn(props) {
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

