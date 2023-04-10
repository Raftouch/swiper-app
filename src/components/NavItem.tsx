import React, { useState } from "react";
import { Link } from "react-router-dom";
import patte from "../imgs/patte.png";

interface NavItemProps {
  children: React.ReactNode;
}

export default function NavItem({ children }: NavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Link to="#">
      <button
        className="w-[40px] h-[40px] border rounded-full flex justify-center bg-pink-200 hover:bg-pink-300"
        onClick={() => setOpen(!open)}
      >
        <img src={patte} alt="patte" className="w-[30px]" />
        {open && children}
      </button>
    </Link>
  );
}
