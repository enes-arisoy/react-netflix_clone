import React from 'react'
import {baseImageURL} from "../../utils/constants"

const Banner = ({movie}) => {
  return (
    <div className='h-[30vh] md:h-[40vh] relative drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]'>
      <img src={baseImageURL + movie.backdrop_path} alt="banner" className='size-full rounded-sm object-cover' />

<div className='bg-[#0000000f] absolute inset-0 grid place-items-center p-3'>
  <h2 className='text-3xl md:text-4xl font-semibold font-mono text-center'>{movie.title}</h2>
</div>
    </div>
  )
}

export default Banner