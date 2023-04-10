import React from "react";
// import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";

export default function DropdownMenu() {
  return (
    <div className="absolute top-16 right-4 flex flex-col rounded overflow-hidden bg-slate-200 w-[100px] p-4">
      <DropdownItem>Dogs</DropdownItem>
      <DropdownItem>Cats</DropdownItem>
    </div>
  );
}
