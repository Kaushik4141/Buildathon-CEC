"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/re.png" alt="Logo" className="h-8 w-8" />
          <span className="text-sm font-semibold tracking-widest">GTA VI</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase">
          <Link href="#" className="opacity-80 hover:opacity-100">Overview</Link>
          <Link href="#" className="opacity-80 hover:opacity-100">News</Link>
          <Link href="#" className="opacity-80 hover:opacity-100">Media</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


