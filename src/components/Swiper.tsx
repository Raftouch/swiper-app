import React, { useContext } from "react";
import SwiperItem from "./SwiperItem";
import { AnimalContext } from "../context/AnimalContext";

export default function Swiper() {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="w-[500px] max-w-[100%] m-auto p-20 pt-40">
      <div className="w-[100%] overflow-auto flex">
          {animals.map((animal) => (
            <SwiperItem animal={animal} key={animal.id} />
          ))}
      </div>
    </div>
  );
}
