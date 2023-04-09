import React, { useContext } from "react";
import SwiperItem from "./SwiperItem";
import { AnimalContext } from "../context/AnimalContext";

export default function Swiper() {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="w-[500px] max-w-[100%] m-auto p-20">
      <div className="w-[100%] max-w-[100%] overflow-auto">
        <ul className="flex min-w-[100%] p-0 m-0">
          {animals.map((animal) => (
            <SwiperItem animal={animal} key={animal.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
