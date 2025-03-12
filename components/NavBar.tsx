import React from "react";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row gap-[32px]">
        <NavBarLink title="Home" />
        <NavBarLink title="Projects" />
        <NavBarLink title="Services" />
        <NavBarLink title="Blog" />
        <NavBarLink title="About" />
        <NavBarLink title="Contact" />
      </div>
    </>
  );
};

export default NavBar;
