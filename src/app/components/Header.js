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
  const closeMenu = () => setOpen(false);
  return (
    <header className="sticky top-0 z-20 border-b text-white border-[#e8e1d9] bg-[url('/images/matt-gross-9aCkSl6YcXg-unsplash.jpg')] bg-cover bg-center bg-fixedbackdrop-blur-md">
      <nav
        className="mx-auto flex min-h-[72px] max-w-[1180px] items-center justify-between gap-6 px-7 max-[720px]:min-h-16 max-[720px]:px-5"
        aria-label="Main navigation"
      >
        <Link
          className="flex items-center gap-2 font-display text-[1.55rem] font-bold tracking-[-.04em] text-white"
          href="/"
          onClick={closeMenu}
        >
          <span>confesso</span>
          <Heart aria-hidden="true" size={22} fill="currentColor" />
        </Link>
        <div className="flex items-center gap-7 text-[.91rem] font-medium text-[#b8b6ba] max-[720px]:hidden">
          {links.map((link) => (
            <Link
              className="transition-colors hover:text-[#5a3c8a]"
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-[#34204e] px-4 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            href="/auth"
          >
            Share anonymously
          </Link>
        </div>
        <button
          className="hidden rounded p-1.5 text-[#34204e] max-[720px]:block"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="grid gap-[18px] border-t border-[#e8e1d9] px-5 py-4 pb-[22px] font-medium text-[#544e5a] min-[721px]:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: -8 }}
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <Link
              className="rounded-full bg-[#34204e] px-4 py-3 text-center font-semibold text-white"
              href="/auth"
              onClick={closeMenu}
            >
              Share anonymously
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
