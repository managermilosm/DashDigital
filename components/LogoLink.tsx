import Link from "next/link";
import Image from "next/image";
import { LogoLinkProp } from "@/types";
import React from "react";

const LogoLink = ({ linkaddress, linkstyles }: LogoLinkProp) => {
  return (
    <Link href={linkaddress} passHref>
      <Image
        src="/dashlogo.png"
        alt="Logo"
        className={`${linkstyles}`}
        priority
      />
    </Link>
  );
};

export default LogoLink;
