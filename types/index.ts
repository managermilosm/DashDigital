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
  colorMap?: string;
  title: string;
  color: "blue" | "orange" | "purple";
}

export interface AnimatedLAProps {
  title: string;
}

export interface ArrowProps {
  strokeWidth?: number;
  className?: string;
}
