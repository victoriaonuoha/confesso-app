import Link from "next/link";
import { Heart } from "lucide-react";

export default function Layout({ children }) {
  return (
    <main className="grid min-h-screen grid-cols-[minmax(320px,.9fr)_1.1fr] max-[720px]:grid-cols-1">
      <aside className="relative overflow-hidden bg-[#34204e] p-[38px] text-white after:absolute after:-right-[130px] after:-bottom-[130px] after:size-[420px] after:rounded-full after:border after:border-[#a897d2] after:opacity-70 after:shadow-[0_0_0_45px_#4b326e,0_0_0_90px_#5e4384] after:content-[''] max-[720px]:min-h-[245px] max-[720px]:p-[26px]">
        <Link
          className="relative z-10 flex items-center gap-2 font-display text-[1.55rem] font-bold tracking-[-.04em]"
          href="/"
        >
          <span>confesso</span>
          <Heart aria-hidden="true" size={22} fill="currentColor" />
        </Link>
        <div className="relative z-10 mt-[23vh] max-w-[400px] max-[720px]:mt-[58px]">
          <p className="font-mono text-[.71rem] font-medium uppercase tracking-[.13em] text-[#d9d0f5]">
            Your words, your space
          </p>
          <h1 className="my-3.5 font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-none tracking-[-.05em] max-[720px]:text-[2.7rem]">
            Say it somewhere safe.
          </h1>
          <p className="max-w-[330px] leading-[1.6] text-[#e2dbf0]">
            No public profile is needed to begin. Your account simply lets you
            return when you need a little room to breathe.
          </p>
        </div>
      </aside>
      {children}
    </main>
  );
}
