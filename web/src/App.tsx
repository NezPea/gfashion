import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import GFashion from './pages/GFashion';
import GMall from './pages/GMall';
import GClub from './pages/GClub';
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
          <Route path='/gfashion' component={GFashion} />
          <Route path='/gmall' component={GMall} />
          <Route path='/gclub' component={GClub} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
