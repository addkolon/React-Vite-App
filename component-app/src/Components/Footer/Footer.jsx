import React from "react";
import './Footer.css';
import logoImage from "./../../assets/images/film-outline.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src={logoImage} alt="The websites logotype" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus modi laboriosam maxime velit laborum dolor, nemo
            reprehenderit provident eius, dicta quia at. Voluptas, cupiditate.
          </p>
          <p><strong>© copyrights 2024</strong></p>
        </div>
        <div>
          <h4>Navigation</h4>
          <nav>
            <ul>
              <li>
                <a href="">Movies</a>
              </li>
              <li>
                <a href="">The world of Cinema</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4>Legal</h4>
          <nav>
            <ul>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
