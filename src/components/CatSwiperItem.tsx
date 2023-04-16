import React from "react";

interface CatSwiperItemProps {
  children: React.ReactNode;
}

export default function CatSwiperItem({ children }: CatSwiperItemProps) {
  return <div className="w-[100%] flex-shrink-0">{children}</div>;
}
