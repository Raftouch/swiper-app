import React, { useContext } from "react";
import { CatContext } from "../context/CatContext";
import CatSwiperItem from "./CatSwiperItem";

export default function CatSwiper() {
  const { cats } = useContext(CatContext);

  return (
    <div className="w-[500px] max-w-[100%] m-auto pt-40 p-20">
      <div className="w-[100%] overflow-auto flex gap-2">
        {cats.map((cat) => (
          <CatSwiperItem cat={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
}
