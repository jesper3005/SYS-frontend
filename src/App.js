import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from './pages/Profile'
import Register from './pages/Register';
import Home from './pages/HomePage';
import Map from './components/Car/Map'
import NoMatch from './pages/PageNotFound'
import Header from './components/Header'
import BrandBanner from './components/Banner'
import Results from './pages/Results'
import CarPage from './pages/CarPage'

export default class App extends Component {
    state = {
        token: "",
        regNo: "AI95295",
    };

    render() {
        return (
            <Router >
                <div>
                    <BrandBanner />
                    <Header isLoggedIn={true} />
                    <Switch>
                        <Route exact path="/" render={() => <Home regNo={this.state.regNo}/>} />
                        <Route path='/map' render={() => <Map />} />
                        <Route path="/profile" render={() => <Profile superState={this.state.token} />} />
                        <Route path="/login" render={() => <Login superState={this.state.token} />} />
                        <Route path="/register" render={() => <Register />} />
                        <Route path="/results" render={() => <Results />} />
                        <Route path="/carpage" render={() => <CarPage regNo={this.state.regNo} />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router >
        );
    };
}
