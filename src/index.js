import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';
import Registration from './pages/Registration';
import Login from "./pages/Login";
import Day from "./pages/Day";

ReactDOM.render(
  <BrowserRouter>
    <Route
      component={Registration}
      path="/reg"
    />
    <Route
      component={Login}
      path="/login"
    />
    <Route
      component={Day}
      path="/day"
    />
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
