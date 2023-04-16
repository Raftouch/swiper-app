import React from "react";

interface DogSwiperItemProps {
  children: React.ReactNode;
}

export default function DogSliderItem({ children }: DogSwiperItemProps) {
  return <div className="w-[100%] flex-shrink-0">{children}</div>;
}
