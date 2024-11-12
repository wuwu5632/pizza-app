import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 mt-auto'>
      <Link className="font-bold text-xl" href="/">MASSIMO</Link>
      <p>@ ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer