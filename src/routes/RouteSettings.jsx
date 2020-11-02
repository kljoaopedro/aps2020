import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import PrivateRoute from "../hoc/PrivateRoute";
import AuthProvider from "../store/auth/AuthProvider";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import {Route} from "react-router";

function RoutesSettings() {

    const loginPage = () => (
            <Login/>
    );
    const homePage = () => (
            <Home/>
    );

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={loginPage}/>
                <Route path="/home" exact component={homePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default RoutesSettings;
