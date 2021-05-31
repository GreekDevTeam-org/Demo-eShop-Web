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
}

export default App;