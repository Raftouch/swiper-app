import React from "react";
import { Animal } from "../models/Animal";

interface SwiperItemProps {
  animal: Animal;
}

export default function SwiperItem({ animal }: SwiperItemProps) {
  return (
    <li className="w-[100%] flex-shrink-0 list-none">
      <img
        src={animal.img}
        alt={animal.name}
        className="w-[100%] h-[100%] select-none"
      />
    </li>
  );
}
