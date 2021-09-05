
import React from 'react';
import loginvsec from './Log in/loginvsec';
import App from './App';
import SignUp from './Sign Up/SignUp';
import NavigationBar from './NavBar/NavigationBar';
import ApplyAdmin from './Admin Apply/ApplyAdmin';
import AdminDashboardFile from './Admin Dashboard/AdminDashboardFile';
import TabExampleVerticalTabular from './Admin Dashboard/TabVeritcal';
import UserCard from './Admin Dashboard/UserCard';
import Profile from './Profile Dashboard/Profile';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navigation() {
    return (
        <Router>
            <Switch>
                 <Route path='/homepage' component={HomePage}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/usercard' component={UserCard}/>
                <Route path='/app' component={App} />
                <Route path='/signupbdlf' component={SignUp} />
                <Route path='/loginbdlf' component={loginvsec} />
                <Route path='/navigationbar' component={NavigationBar} />
                <Route path='/applyadmin' component={ApplyAdmin} />
                <Route path='/admindashboard' component={AdminDashboardFile}/>
                <Route path='/tabexample' component={TabExampleVerticalTabular}/>
            </Switch>
        </Router>
    )

}
export default Navigation;