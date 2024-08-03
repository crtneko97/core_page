import React from 'react';
import Link from 'next/link';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className={'navbar'}>
      <img className={'icon'} src="/icons/Logo.png" alt="Icon" width={250} height={110} />
      <div className={'navLinks'}>
        <Link href="/">
          <p className={'navLink'}>Home</p>
        </Link>
        <Link href="/about">
          <p className={'navLink'}>About</p>
        </Link>
        <Link href="/contact">
          <p className={'navLink'}>Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
