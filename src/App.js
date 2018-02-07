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
        <div id="header"></div>
        <div id="body"></div>
        <div id="footer"></div>
        {/* <Header id="header"/>
        <div id="body">
        <Navigation Camps={Camps} />  
        <CampProfile Camp={Camps[1]} />
        </div>
        <Footer id="footer"/> */}
      </div>
    ); // eof return
  } // eof render()
} // eof class App extends Component

export default App;
