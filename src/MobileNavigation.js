import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import "./styles.css";
import "./media.css";
import { useState } from "react";

const MobileNavigation = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className="hamburger"
      size="40px"
      onClick={() => {
        setOpenMobileNav(!openMobileNav);
      }}
    />
  );
  const closeIcon = (
    <CgCloseO
      className="hamburger"
      size="40px"
      onClick={() => {
        setOpenMobileNav(!openMobileNav);
      }}
    />
  );

  const closeMobileNav = () => {
    setOpenMobileNav(false);
  };

  return (
    <nav className="mobileNavigation">
      {openMobileNav ? closeIcon : hamburgerIcon}
      {openMobileNav && (
        <NavLinks isMobile={true} closeMobileNav={closeMobileNav} />
      )}
    </nav>
  );
};

export default MobileNavigation;
