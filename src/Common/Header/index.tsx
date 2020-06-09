import React from "react";
import ChRISLogo from "../../assets/ChRIS.jpg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header header-home main-grid">
      <div className="header-content">
        <Link className="logo-link" to="/">
          <img src={ChRISLogo} alt="" className="logo" />
        </Link>
        <button className="open-nav" aria-label="Open Navigation">
          &#9776;
        </button>

        <nav className="nav">
          <button aria-label="Close navigation" className="close-nav">
            &times;
          </button>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/containerize">
                CONTAINERIZE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submit">
                SUBMIT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
