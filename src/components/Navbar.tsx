import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <nav className="fixed h-[80px] w-full flex justify-between items-center px-5 bg-slate-100">
      <span>Humans & Animals</span>
      <ul className="flex gap-2">{children}</ul>
    </nav>
  );
}
