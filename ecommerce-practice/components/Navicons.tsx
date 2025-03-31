'use client';
import React, { useState } from 'react';
import { UserIcon, BellIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const Navicons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const router = useRouter()

    //Temporary
    const isLoggedIn = false

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }
  return (
    <div className="flex items-center gap-4 md:gap-6 relative">
      {/* Profile Icon */}
      <button
        onClick={handleProfile}
        aria-label="Profile"
        className="h-6 w-6 text-gray-700 hover:text-green-500 md:h-7 md:w-7">
        <UserIcon />
      </button>
        {isProfileOpen && (
            <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_0pc_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
            </div>
        
        )}

      {/* Notifications Icon */}
      <button
        aria-label="Notifications"
        className="h-6 w-6 text-gray-700 hover:text-green-500 md:h-7 md:w-7 relative">
        <BellIcon />
      </button>

      {/* Cart Icon */}
      <div className='relative cursor-pointer'
      onClick={() => setIsCartOpen((prev) => !prev)}
      >
      <button
        aria-label="Cart"
        className="h-6 w-6 text-gray-700 hover:text-green-500 md:h-7 md:w-7 relative">
        <ShoppingCartIcon />
      </button>
      <div className='absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center'>2</div>
      </div>
      {isCartOpen && (
        <CartModal />
      )}
    </div>
  );
};

export default Navicons;