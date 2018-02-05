import React, { Component } from 'react';
import './App.css';
import {Camps} from "./Camps";

// routes
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation Camps={Camps} />
        <Footer />
      </div>
    ); // eof return
  } // eof render()
} // eof class App extends Component

export default App;
