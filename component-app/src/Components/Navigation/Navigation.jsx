import React, { useState } from "react";

import "./Navigation.css";

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  function triggerMenu() {
    setMenuActive(!menuActive); // Toggle the state between true and false
  }
  
  return (
    <>
      <div className="main-nav">
        <div className="logo">
          <h1>Logotype</h1>
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
