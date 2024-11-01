"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.nav}>
      <Image
        src="/images/sabe_shaikh-removebg-preview (1).png"
        alt="logo"
        height={85}
        width={175}
        className={styles.logo}
      />

      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <FaTimes className={styles.menuCloseIcon} onClick={closeMenu} />
      </ul>

      <FaBars className={styles.menuIcon} onClick={openMenu} />
    </nav>
  );
}
