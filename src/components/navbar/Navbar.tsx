"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./navbar.scss";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className={"navbar"}>
      <a href="/">
        <img
          className={"icon"}
          src="/icons/Logo.png"
          alt="Icon"
          width={175}
          height={75}
        />
      </a>
      <div className={"navLinks"}>
        <Link href="/">
          <p className={`navLink ${pathName === "/" ? "active" : ""}`}>Home</p>
        </Link>
        <Link href="/about">
          <p className={`navLink ${pathName === "/about" ? "active" : ""}`}>
            About
          </p>
        </Link>
        <Link href="/contact">
          <p className={`navLink ${pathName === "/contact" ? "active" : ""}`}>
            Contact
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
