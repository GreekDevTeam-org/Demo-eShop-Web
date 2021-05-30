import React from 'react'
import './Style.css'

const navSlide = ()=>{
  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  nav.classList.toggle('nav-active');

  navLinks.forEach((link,index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`;
      }
  });

  burger.classList.toggle('toggle');
}


export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo" >
          <h4>Demo-eShop</h4>
         </div>
         <ul className="nav-links">
            <li>
              <a href="#">home</a>
              </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">work</a></li>
            <li>
              <a href="#">Projeckts</a>
            </li>
         </ul>
         <div className="burger" onClick={navSlide}>
           <div class="line1"></div>
           <div class="line2"></div>
           <div class="line3"></div>
         </div>
      </nav>
  </div>
    
  )
}

