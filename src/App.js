import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Structure from './Structure/Structure';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Structure />
      </BrowserRouter>
    );
  }
}

export default App;
