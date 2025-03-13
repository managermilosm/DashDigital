import { MouseEventHandler } from "react";

export interface NavBarLinkProp {
  title: string;
  linkstyles?: string;
  linktype?: "Home" | "Projects" | "Services" | "Blog" | "About" | "Contact";
}

export interface LogoLinkProp {
  linkaddress: string;
  linkstyles?: string;
}

export interface AnimatedButtonProps {
  title: string;
  color: string;
}
