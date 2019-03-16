import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import IndexContainer from './components/IndexContainer';
import CallContainer from './components/CallContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route name="index" exact path="/" render={() => <IndexContainer/>} />
            <Route name="call" path="/call" render={() => <CallContainer/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}
