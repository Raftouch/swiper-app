import React from "react";
import { FaCat, FaDog, FaHeart, FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const button =
    "w-[40px] h-[40px] border rounded-full flex justify-center items-center bg-pink-200 hover:bg-pink-300";

  return (
    <nav className="fixed h-[80px] w-full flex justify-between items-center px-5 bg-slate-100">
      <span className="text-sm flex gap-1 font-semibold">
        Kids <FaHeart className="text-pink-300"/> Animals
      </span>
      <span className="flex gap-2">
        <Link to="/" className={button}>
          <FaPaw />
        </Link>
        <Link to="/cats" className={button}>
          <FaCat />
        </Link>
        <Link to="/dogs" className={button}>
          <FaDog />
        </Link>
      </span>
    </nav>
  );
}
