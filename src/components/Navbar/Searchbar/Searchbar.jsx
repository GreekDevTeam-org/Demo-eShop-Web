import React from "react";
import "./Style.css";

const searchBtnAction = () => {
  document.querySelector(".search-box").classList.add("active");
  document.querySelector("input").classList.add("active");
  document.querySelector(".search-btn").classList.add("active");
  document.querySelector(".cancel-btn").classList.add("active");
};

const cancelBtnAction = () => {
  document.querySelector(".search-box").classList.remove("active");
  document.querySelector("input").classList.remove("active");
  document.querySelector(".search-btn").classList.remove("active");
  document.querySelector(".cancel-btn").classList.remove("active");
  document.getElementById("input").value = "";
};

const Searchbar = () => {
  return (
    <div className="search-box">
      <input type="text" id="input" placeholder="Type to search..." />
      <div className="search-btn" onClick={searchBtnAction}>
        <i className="fas fa-search"></i>
      </div>
      <div className="cancel-btn" onClick={cancelBtnAction}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default Searchbar;
