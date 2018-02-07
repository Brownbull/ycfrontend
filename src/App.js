import React, { Component } from 'react';
import "./App.css";

// data
import {Camps} from "./Camps";

// routes
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CampProfile from './components/CampProfile/CampProfile';

class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="header">
          <Header id="header" />
        </div>
        <div id="body">
          <Navigation Camps={Camps} /> 
          {/* <CampProfile Camp={Camps[1]} /> */}
        </div>
        <div id="footer">
          <Footer id="footer" /> 
        </div>
      </div>
    ); // eof return
  } // eof render()
} // eof class App extends Component

export default App;
