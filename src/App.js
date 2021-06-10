import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Fouter/Footer";
import Signup from "./components/Pages/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../src/contexts/AuthContext";
import Login from "./components/Pages/Login";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w=100" style={{ maxWidth: "400px" }}>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </div>
            </Container>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
