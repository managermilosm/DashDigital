import { title } from "process";
import React from "react";
import { NavBarLinkProp } from "@/types";
import { link } from "fs";

const NavBarLink = ({ title, linkstyles, linktype }: NavBarLinkProp) => {
  return (
    <a
      className={`${linkstyles} font-normal text-white text-[16px] leading-[24px] tracking-[0px]`}
      href="#"
    >
      {title}
    </a>
  );
};

export default NavBarLink;
