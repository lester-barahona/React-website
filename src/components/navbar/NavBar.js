import React, { useState,useEffect } from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import Button from "../button/Button";

const NavBar = () => {
  //states
  const [click, setClick] = useState(false);
  const[button,setButton]=useState(true);

  //Handles hamburger icon
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Resize showing the button
  const showButton=()=>{
    if(window.innerWidth<=900){
      setButton(false);
    }else{
      setButton(true);
    }
  }

  //to refresh refresh show button
  useEffect(()=>{
    showButton();
  },[]);

  window.addEventListener('resize',showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            L'TRA <i className="fas fa-umbrella-beach"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Regístrarse
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" >Regístrarse</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
