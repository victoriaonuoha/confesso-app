"use client";

import { House, Plus, Bookmark } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const goHome = () => {
    router.push("/feed");
  };

  const goToCreate = () => {
    router.push("/create");
  };

  const isHome = pathname === "/feed";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#08080c]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4">
        
        {/* Home */}
        <button
          onClick={goHome}
          className={`flex flex-col items-center justify-center gap-1 transition ${
            isHome
              ? "text-purple-400"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <House size={21} />
          <span className="text-[11px]">Home</span>
        </button>

        {/* Create Post */}
        <button
          onClick={goToCreate}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white shadow-lg shadow-purple-500/20 transition hover:bg-purple-600"
          aria-label="Create post"
        >
          <Plus size={25} />
        </button>

        {/* Saved Posts - functionality coming later */}
        <button
          className="flex flex-col items-center justify-center gap-1 text-gray-500 transition hover:text-gray-300"
          aria-label="Saved posts"
        >
          <Bookmark size={21} />
          <span className="text-[11px]">Saved</span>
        </button>
      </div>
    </nav>
  );
}
