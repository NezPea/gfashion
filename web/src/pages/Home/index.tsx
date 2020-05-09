import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className='home-container'>
      <h1>Home page111</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Link to='/login'>login</Link>
    </div>
  )
}
