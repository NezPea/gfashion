import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';

const NotFound = () => {
  return (
    <div>
      <h1>Notfound page</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
