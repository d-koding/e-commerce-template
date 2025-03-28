import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <div className="relative w-full h-80 group">
          {/* Background Image (visible on hover) */}
          <Image 
            src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover rounded-md"
          />
          {/* Foreground Image (default visible) */}
          <Image 
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="absolute object-cover rounded-md z-10 group-hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>Price</span>
        </div>
        <div className='text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-primary w-max py-2 px-4 text-xs hover:bg-primary'>Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <div className="relative w-full h-80 group">
          {/* Background Image (visible on hover) */}
          <Image 
            src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover rounded-md"
          />
          {/* Foreground Image (default visible) */}
          <Image 
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="absolute object-cover rounded-md z-10 group-hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>Price</span>
        </div>
        <div className='text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-primary w-max py-2 px-4 text-xs hover:bg-primary'>Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <div className="relative w-full h-80 group">
          {/* Background Image (visible on hover) */}
          <Image 
            src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover rounded-md"
          />
          {/* Foreground Image (default visible) */}
          <Image 
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="absolute object-cover rounded-md z-10 group-hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>Price</span>
        </div>
        <div className='text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-primary w-max py-2 px-4 text-xs hover:bg-primary'>Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <div className="relative w-full h-80 group">
          {/* Background Image (visible on hover) */}
          <Image 
            src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover rounded-md"
          />
          {/* Foreground Image (default visible) */}
          <Image 
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="absolute object-cover rounded-md z-10 group-hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>Price</span>
        </div>
        <div className='text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-primary w-max py-2 px-4 text-xs hover:bg-primary'>Add to Cart</button>
      </Link>
    </div>
    
  )
}

export default ProductList