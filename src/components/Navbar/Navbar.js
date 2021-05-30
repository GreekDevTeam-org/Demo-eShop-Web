import React, { Component, useState, useEffect } from 'react';
import './Navbar.css'
import {Button} from "../Button"

const MenuItems = [
    {
        title: 'Home',
        url: '#',
        cName: 'nav-links'
    },
    {
       title: 'Services',
       url: '#',
       cName: 'nav-links'
   },
   {
       title: 'Products',
       url: '#',
       cName: 'nav-links'
   },
   {
       title: 'Contact Us',
       url: '#',
       cName: 'nav-links'
   },
   {
       title: 'Sign in',
       url: '#',
       cName: 'nav-links-mobile'
   },
   ]

   const Navbar = () => {
    const [clicked, setClicked] = useState( false );
    
    
    const handleClick = () => setClicked( !clicked );
    useEffect(() => {
        console.log("anesti");
    }, [clicked]);    

    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
            <i className={ clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={ clicked ? 'Nav-menu active': 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
  
  export default Navbar;