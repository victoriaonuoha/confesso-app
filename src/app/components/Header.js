"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Menu as MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="border-b border-purple-300 py-2 md:px-4 flex justify-between items-center text-blue-700 font-bold text-3xl md:text-5xl">
      
      {/* LEFT SIDE — "Confesso" sliding in from left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Link className="flex gap-2" href="/">
          Confesso <Heart size={35} className="md:w-12 md:h-12" />
        </Link>
      </motion.div>

      {/* MOBILE MENU BUTTON */}
      <button className="lg:hidden">
        <MenuIcon />
      </button>

       {/* RIGHT SIDE LINKS — sliding in from right  */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="lg:w-[50%] hidden lg:flex lg:justify-between"
      >
        <Link
          href="/About"
          className="px-3 underline rounded-lg hover:bg-blue-700 hover:text-white transition"
        >
          About Us
        </Link>
        <Link
          href="/Login"
          className="px-3 underline rounded-lg hover:bg-blue-700 hover:text-white transition"
        >
          Log In
        </Link>
        <Link
          href="/Logout"
          className="px-3 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition"
        >
          Log Out
        </Link>
      </motion.div>

    </div>
  );
}
