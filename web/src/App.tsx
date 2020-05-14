import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouter from './routers/AppRouter';

function App() {
  return (
      <div>
        <CssBaseline />
        <AppRouter />
      </div>
  );
}

export default App;
