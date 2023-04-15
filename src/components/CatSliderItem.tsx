import React from 'react'
import { Animal } from '../models/Animal'

interface CatSliderItemProps {
    cat: Animal
}

export default function CatSliderItem({cat}: CatSliderItemProps) {
  return (
    <li className="w-[100%] flex-shrink-0 list-none">
    <img
      src={cat.img}
      alt={cat.name}
      className="w-[100%] h-[100%] select-none"
    />
  </li>
  )
}
