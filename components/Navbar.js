'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" onClick={close}>
          <img src="/assets/Logo/header logo.png" alt="SheGo Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link href="/" onClick={close}>Home</Link></li>
        <li><a href="/#services" onClick={close}>Services</a></li>
        <li><a href="/#driver" onClick={close}>Driver</a></li>
        <li><a href="/#about" onClick={close}>About Us</a></li>
        <li><a href="/#safety" onClick={close}>Safety</a></li>
        <li><a href="/#blog" onClick={close}>Blog</a></li>
        <li><a href="/#contact" onClick={close}>Contact Us</a></li>
      </ul>

      <Link className="nav-btn" href="/#download" onClick={close}>
        Download app
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "☰"}
      </button>

      <ul className={`mobile-menu ${open ? "active" : ""}`}>
        <li><Link href="/" onClick={close}>Home</Link></li>
        <li><a href="/#services" onClick={close}>Services</a></li>
        <li><a href="/#driver" onClick={close}>Driver</a></li>
        <li><a href="/#about" onClick={close}>About Us</a></li>
        <li><a href="/#safety" onClick={close}>Safety</a></li>
        <li><a href="/#blog" onClick={close}>Blog</a></li>
        <li><a href="/#contact" onClick={close}>Contact Us</a></li>
      </ul>
    </nav>
  );
}
