import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./Style.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  burger.classList.toggle("toggle");
};

export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h4>Demo-eShop</h4>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <Searchbar className="search-bar" />
            </a>
          </li>
          <li>
            <a href="#">
              <FavoriteBorderIcon id="favorite-btn" />
            </a>
          </li>
          <li>
            <a href="#">
              <ShoppingCartIcon id="shopping-cart-btn" />
            </a>
          </li>
          <li>
            <a href="#">
              <AccountCircleIcon id="account-btn" />
            </a>
          </li>
        </ul>
        <div className="burger" onClick={navSlide}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </div>
  );
};
