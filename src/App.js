import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Fouter/Footer";
import Signup from "./components/Pages/Signup";
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh" }}>
              <div className="w=100" style={{ maxWidth: "400px"}} >
                <Route path="/signup" exact component={Signup} />
              </div>            
            </Container>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
