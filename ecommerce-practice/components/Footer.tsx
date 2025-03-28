import Link from 'next/link'
import React from 'react'
import { 
    ShareIcon

  } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <div className=''>
        {/* TOP */}
        <div className=''>
            {/* LEFT */}
            <div className='w-1/4'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>HOME</div>
                </Link>
                <p>
                    San Francisco, CA, United States
                </p>
                <span>dylankconnor@gmail.com</span>
                <span>+1 415 429 9918</span>
                <div className='flex gap-6'>
                    <ShareIcon></ShareIcon>
                </div>
            </div>

            {/* CENTER */}
            <div className='w-1/4'>
            
            </div>

            {/* LEFT */}
            <div className='w-1/4'>
            
            </div>
        </div>
        {/* BOTTOM */}
        <div className=''></div>
    </div>
  )
}

export default Footer