import React from "react";
import "../../App.css";
import Cards from "../Cards";
import { useAuth } from "../../contexts/AuthContext"

function Home() {
  return (
    <>
      <Cards />
      <h1>{useAuth().currentUser?.email}</h1>
    </>
  );
}

export default Home;
