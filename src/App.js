import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './components/homepage'
import Nav from './components/nav'
import Footer from './components/footer'
import About from './components/about'

function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Homepage} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
