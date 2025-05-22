'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface MediaItem {
  url: string
  type?: string
  order?: number
}

interface ProductImagesProps {
  items: MediaItem[]
}

const ProductImages = ({ items }: ProductImagesProps) => {
  const [index, setIndex] = useState(0)

  if (!items || items.length === 0) {
    return <div>No images available</div>
  }

  // Sort by order
  const sortedItems = [...items].sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={sortedItems[index].url}
          alt="Product image"
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4 mt-8">
        {sortedItems.map((item, i) => (
          <div
            className="w-1/4 h-32 relative cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.url}
              alt={`Thumbnail ${i + 1}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages