import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from './pages/Profile'
import Register from './pages/Register';
import Home from './pages/HomePage';
import NoMatch from './pages/PageNotFound'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CarPage from './pages/CarPage'
import FindRental from './pages/FindRental'
import RentOutCar from './pages/RentOutCar'

export default class App extends Component {
    state = {
        token: "",
        regNo: "",
    };

    setRegno = (regNo) => {
        this.setState({regNo});
        console.log("Hello regno" + regNo) 
    }

    render() {
        return (
            <Router >
                <div>
                    <Header />
                    <Navbar isLoggedIn={this.state.token} />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/profile" render={() => <Profile superState={this.state.token} />} />
                        <Route path="/login" render={() => <Login superState={this.state.token} />} />
                        <Route path="/register" render={() => <Register />} />
                        <Route path="/carpage" render={() => <CarPage regNo={this.state.regNo} />} />
                        <Route path="/find-rental" render={() => <FindRental regNo={this.state.regNo} setRegno={this.setRegno}/>} />
                        <Route path="/rent-out-car" render={() => <RentOutCar />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router >
        );
    };
}
