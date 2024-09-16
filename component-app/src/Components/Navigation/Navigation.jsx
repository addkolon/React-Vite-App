import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import "./Navigation.css";
import { CloseOutline } from 'react-ionicons'
import logoImage from "./../../assets/images/film-outline.svg";

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation(); // Hook to detect route changes

  function triggerMenu() {
    setMenuActive(!menuActive);
  }

  // Close the menu when the route changes
  useEffect(() => {
    setMenuActive(false);  // Close the menu when the route changes
  }, [location]);  // Effect runs whenever the location changes

  return (
    <>
      <div className="main-nav">
        <div className="logo">
        <Link to="/"><img src={logoImage} alt="The websites logotype" /></Link>
        </div>
        <nav className="nav-links">
          <div className="mobile-menu-trigger" onClick={triggerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul id="nav-list" className={menuActive ? "active" : ""}>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">The world of Cinema</a>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li className="close-mobile-menu">
              <a onClick={triggerMenu}><CloseOutline color={'#B8A64B'}/> </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
