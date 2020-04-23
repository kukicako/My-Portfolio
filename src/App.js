import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './components/homepage'
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Homepage />
      </div>
    </Router>
  );
}

export default App;
