import React from "react";
import { Link } from "react-router-dom";

interface DropdownItemProps {
  children: React.ReactNode;
}

export default function DropdownItem({ children }: DropdownItemProps) {
  return (
    <Link to="#" className="h-[40px] w-[70px] hover:bg-slate-300 p-2 rounded">
      {children}
    </Link>
  );
}
