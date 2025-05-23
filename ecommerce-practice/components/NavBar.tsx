import Link from 'next/link'
import React, { Suspense } from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import Navicons from './Navicons'

const NavBar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        {/* MOBILE */}
        <div className='h-full flex items-center justify-between md:hidden'>
            {/* MOBILE */}
            <Link href='/'>
            <div className='text-2xl tracking-wide'>{process.env.APP_TITLE}</div>
            </Link>
            <Menu/>
        </div>

        {/* BIGGER SCREENS */}
        <div className='hidden md:flex items-center justify-between gap-8 h-full'>
            {/* LEFT */}
            <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                <Link href="/" className='flex items-center gap-3'>
                    {/* PLACE LOGO HERE */}
                    <div className='text-2xl tracking-wide'>{process.env.APP_TITLE}</div>
                </Link>
                <div className='hidden xl:flex gap-4'>
                    <Link href="/">HomePage</Link>
                    <Link href="/list">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-2/3 flex items-center justify-between gap-8'>
                <Suspense fallback="Loading...">
                    <SearchBar/>
                </Suspense>
                <Navicons/>
            </div>
        </div>
    </div>
  )
}

export default NavBar