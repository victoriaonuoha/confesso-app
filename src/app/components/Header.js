"use client";

import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#community", label: "Community" },
  { href: "/auth/Login", label: "Log in" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span>confesso</span><Heart aria-hidden="true" size={22} fill="currentColor" />
        </Link>
        <div className="nav-links">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="nav-cta" href="/auth">Share anonymously</Link>
        </div>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className="nav-cta" href="/auth" onClick={() => setOpen(false)}>Share anonymously</Link>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
