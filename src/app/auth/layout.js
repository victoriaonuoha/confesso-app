import Link from "next/link";
import { Heart } from "lucide-react";

export default function Layout({ children }) {
  return <main className="auth-page">
    <aside className="auth-aside"><Link className="brand" href="/"><span>confesso</span><Heart aria-hidden="true" size={22} fill="currentColor" /></Link><div className="auth-aside-copy"><p className="eyebrow">Your words, your space</p><h1>Say it somewhere safe.</h1><p>No public profile is needed to begin. Your account simply lets you return when you need a little room to breathe.</p></div></aside>
    {children}
  </main>;
}
