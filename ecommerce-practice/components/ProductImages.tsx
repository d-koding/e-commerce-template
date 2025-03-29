'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/31361239/pexels-photo-31361239/free-photo-of-fresh-strawberries-in-elegant-wine-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        id: 2,
        url: "https://images.pexels.com/photos/11605071/pexels-photo-11605071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
]

const ProductImages = () => {
    const[index, setIndex] = useState(0)
  return (
    <div className=''>
        <div className='h-[500px] relative'>
            {/* MAIN IMAGE */}
            <Image 
            src={images[index].url} 
            alt="" 
            fill 
            sizes="30vw" 
            className="object-cover rounded-md"
            />
        </div>
        <div className='flex gap-4 mt-8'>
            {images.map((img, i) => (
                <div 
                className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' 
                key={img.id} 
                onClick={() => setIndex(i)}
                >
                    <Image
                    src={img.url}
                    alt=""
                    fill
                    sizes="30vw"
                    className='object-cover rounded-md'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImages