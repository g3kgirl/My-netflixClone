import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
<h1 className='text-4xl font-bold'>{title}</h1>
<p className='py-6  w-1/4 '>{overview}</p>
<div className=''>
  <button  className=" bg-white text-black p-2 px-12 text-xl   rounded-lg hover:bg-opacity-80" >
  ▶ Play</button>
  <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg">More info</button>
</div>
    </div>
  )
}

export default VedioTitle;