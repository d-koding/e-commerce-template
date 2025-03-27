'use client'
import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Menu = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className="">
      <Bars3Icon
        className="h-7 w-7 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      /> {
        open && (
            <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center gap-8 text-xl z-10'>
                <Link href="/">HomePage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart(1)</Link>
            </div>
        )
      }
    </div>
  )
}

export default Menu