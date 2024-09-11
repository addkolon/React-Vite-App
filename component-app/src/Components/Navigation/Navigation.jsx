import { useState } from "react";

import "./Navigation.css";
import logoImage from "./../../assets/images/film-outline.svg"

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  function triggerMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <div className="main-nav">
        <div className="logo">
          <img src={logoImage} alt="The websites logotype"  />
        </div>
        <nav className="nav-links">
          <div className="mobile-menu-trigger" onClick={triggerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul id="nav-list" className={menuActive ? "active" : ""}>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
