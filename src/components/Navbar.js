import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/NavBarStyle.css'

const Header = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn === "") {
        return <HeaderNotLoggedIn />
    } else {
        return <HeaderLoggedIn />
    }

}

export default Header;

function HeaderLoggedIn() {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
            <li><NavLink activeClassName="active" to="/find-rental">FIND RENTAL</NavLink></li>
            <li><NavLink activeClassName="active" to="/profile">PROFILE</NavLink></li>
        </ul>
    )
}

function HeaderNotLoggedIn() {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
            <li><NavLink activeClassName="active" to="/find-rental">FIND RENTAL</NavLink></li>
            <li><NavLink activeClassName="active" to="/rent-out-car">RENT OUT YOUR CAR</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">LOGIN</NavLink></li>
            <li><NavLink activeClassName="active" to="/register">SIGN UP</NavLink></li>
        </ul>
    )
}

