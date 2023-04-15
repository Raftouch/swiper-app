import { Animal } from "../models/Animal";

interface DogSwiperItemProps {
  dog: Animal;
}

export default function DogSliderItem({ dog }: DogSwiperItemProps) {
  return (
    <li className="w-[100%] flex-shrink-0 list-none">
      <img
        src={dog.img}
        alt={dog.name}
        className="w-[100%] h-[100%] select-none"
      />
    </li>
  );
}
