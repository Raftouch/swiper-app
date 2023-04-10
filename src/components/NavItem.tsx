import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

interface NavItemProps {
  icons: React.ReactNode;
  children: React.ReactNode
}

export default function NavItem({ icons, children }: NavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Link to="#">
      <button
        className="w-[40px] h-[40px] border rounded-full flex justify-center items-center bg-pink-200 hover:bg-pink-300"
        onClick={() => setOpen(!open)}
      >
        {icons}
        {open && children}
      </button>
    </Link>
  );
}
