import Link from 'next/link'
import React from 'react'
import { ShareIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <Link href="/">
            <div className="text-2xl tracking-wide font-bold">
              {process.env.APP_TITLE}
            </div>
          </Link>
          <p className="text-gray-600">
            San Francisco, CA, United States
          </p>
          <span className="font-semibold text-gray-800">
            dylankconnor@gmail.com
          </span>
          <span className="font-semibold text-gray-800">
            +1 415 429 9918
          </span>
          <div className="flex gap-6">
            <ShareIcon className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            {/* Add more social icons as needed */}
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-lg text-gray-900">COMPANY</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="text-gray-600 hover:text-gray-900">About Us</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Careers</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Affiliates</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-lg text-gray-900">SHOP</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="text-gray-600 hover:text-gray-900">New Arrivals</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Accessories</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Men</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Women</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-lg text-gray-900">HELP</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="text-gray-600 hover:text-gray-900">Customer Service</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">My Account</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Find a Store</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Legal and Privacy</Link>
              <Link href="" className="text-gray-600 hover:text-gray-900">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-semibold text-lg text-gray-900">SUBSCRIBE</h1>
          <p className="text-gray-600">
            Be the first to get the latest news about trends, promotions, and much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4 bg-white border border-gray-300 rounded-l-md"
            />
            <button className="w-1/4 bg-primary text-white rounded-r-md hover:bg-primay transition-colors">
              JOIN
            </button>
          </div>
          <span className="font-semibold text-gray-800">Secure Payments</span>
          <div className="flex justify-between">
            {/* Add payment icons here */}
          </div>
        </div>
      </div>
      
      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-gray-600 text-center">
        © {new Date().getFullYear()} {process.env.APP_TITLE}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer