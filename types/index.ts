import { MouseEventHandler } from "react";

export interface NavBarLinkProp {
    title: string;
    linkstyles?: string;
    linktype?: "Home" | "Projects" | 'Services' | "Blog" | "About" | 'Contact';
}