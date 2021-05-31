<<<<<<< HEAD
import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
        <div className = "App">
            <Router>
                <Navbar />

                
                <Footer />
            </Router>
        </div>
    );
=======
import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
>>>>>>> 80b2071a839ae362259a952039a4abd1e67cb6ff
}

export default App;
