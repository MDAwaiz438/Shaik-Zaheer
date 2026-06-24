"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          <div className="logo-text">ZED<span>MOBILES</span></div>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/products" className="btn btn-primary" style={{marginLeft: '1rem'}} onClick={() => setIsOpen(false)}>Shop Now</Link>
        </nav>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
