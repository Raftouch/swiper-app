import React, { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";
import HomeSwiperItem from "./HomeSwiperItem";

export default function HomeSwiper() {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="w-[500px] max-w-[100%] m-auto pt-40 p-20">
      <div className="w-[100%] overflow-auto flex gap-2">
        {animals.map((animal) => (
          <HomeSwiperItem animal={animal} key={animal.id} />
        ))}
      </div>
    </div>
  );
}
