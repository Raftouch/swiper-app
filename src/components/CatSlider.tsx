import React, { useContext } from 'react'
import { CatContext } from '../context/CatContext'
import CatSliderItem from './CatSliderItem'

export default function CatSlider() {
  const {cats} = useContext(CatContext)

  return (
  <div className="w-[800px] max-w-[100%] m-auto p-20 pt-40">
    <div className="w-[100%] overflow-auto flex">
        {cats.map((cat) => (
          <CatSliderItem cat={cat} key={cat.id}/>
        ))}
    </div>
  </div>
    )
  }
  