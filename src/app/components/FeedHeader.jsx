
"use client";

import { useState } from "react";
import { Menu, User, LogOut, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/auth/Login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080c]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <button
          onClick={() => router.push("/feed")}
          className="text-xl font-bold tracking-tight text-white"
        >
          Confesso<span className="text-purple-400">.</span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={() => router.push("/profile")}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <User size={17} />
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white sm:hidden"
          aria-label="Open menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#08080c] px-4 py-4 sm:hidden">
          <div className="mx-auto max-w-6xl space-y-2">
            <button
              onClick={() => {
                router.push("/profile");
                setMenuOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              <User size={18} />
              Profile
            </button>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

