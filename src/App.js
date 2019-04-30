import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import Register from './pages/Register';
import Home from './pages/HomePage';
import Map from './pages/Map'
import Header from './components/Header'
import BrandBanner from './components/Banner'

export default class App extends Component {
    state = { token: "" };

    render() {
        return (
            <Router >
                <div>
                    <BrandBanner />
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path='/map' render={() => <Map />} />
                        <Route path="/userPage" render={() => <UserPage superState={this.state} />} />
                        <Route path="/adminPage" render={() => <AdminPage superState={this.state} />} />
                        <Route path="/login" render={() => <Login superState={this.state} />} />
                        <Route path="/register" render={() => <Register />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router >
        );
    };
}


function NoMatch() {
    return (
        <h2>404 - Page not found!</h2>
    )
};