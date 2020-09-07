import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import login from './pages/login';
import MainComponent from './components/MainComponent';


ReactDOM.render(
    <Router>
        <Switch>
             <Route exact path="/" component={login}></Route>
             <Route exact path="/home" component={MainComponent}></Route>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 
