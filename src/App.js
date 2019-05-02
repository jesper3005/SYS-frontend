import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from './pages/Profile'
import Register from './pages/Register';
import Home from './pages/HomePage';
import Map from './pages/Map'
import NoMatch from './pages/PageNotFound'
import Header from './components/Header'
import BrandBanner from './components/Banner'
import Results from './pages/Results'

export default class App extends Component {
    state = { 
        token: "",
    };

    render() {
        return (
            <Router >
                <div>
                    <BrandBanner />
                    <Header isLoggedIn={true} />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path='/map' render={() => <Map />} />
                        <Route path="/profile" render={() => <Profile superState={this.state} />} />
                        <Route path="/login" render={() => <Login superState={this.state} />} />
                        <Route path="/register" render={() => <Register />} />
                        <Route path="/results" render={() => <Results />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router >
        );
    };
}
