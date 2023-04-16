import React from "react";

interface HomeSwiperItemProps {
  children: React.ReactNode;
}

export default function HomeSwiperItem({ children }: HomeSwiperItemProps) {
  return <div className="w-[100%] flex-shrink-0">{children}</div>;
}
