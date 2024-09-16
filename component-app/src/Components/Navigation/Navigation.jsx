import { useState } from "react";

import "./Navigation.css";
import { CloseOutline } from 'react-ionicons'
import logoImage from "./../../assets/images/film-outline.svg";

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  function triggerMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <div className="main-nav">
        <div className="logo">
          <img src={logoImage} alt="The websites logotype" />
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
              <a href="">About us</a>
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
