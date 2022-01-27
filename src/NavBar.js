import React from "react";
import "./styles.css";
import "./media.css";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function NavBar() {
  return (
    <>
      <header id="header">
        <span>
          <Link className="logo" to="/main-site">
            PC
          </Link>
        </span>
        <div className="header-navs">
          <Navigation />
          <MobileNavigation />
        </div>
      </header>
    </>
  );
}

export default NavBar;
