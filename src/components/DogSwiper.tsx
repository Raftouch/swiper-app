import React, { useContext } from "react";
import { DogContext } from "../context/DogContext";
import DogSwiperItem from "./DogSwiperItem";

export default function DogSwiper() {
  const { dogs } = useContext(DogContext);

  return (
    <div className="w-[500px] max-w-[100%] m-auto pt-40 p-20">
      <div className="w-[100%] overflow-auto flex gap-2">
        {dogs.map((dog) => (
          <DogSwiperItem key={dog.id}>
            <img 
              src={dog.img} 
              alt={dog.name} 
              className="w-[100%] h-[100%]" 
            />
          </DogSwiperItem>
        ))}
      </div>
    </div>
  );
}
