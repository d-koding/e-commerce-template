import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-800 h-96 '>
                    <Image src='https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList