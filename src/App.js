import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './components/homepage'
import Nav from './components/nav'
import Footer from './components/footer'
function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Homepage />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
