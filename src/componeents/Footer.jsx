import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='grid grid-cols-2 bg-cyan-800'>
        <div className='text-center  p-5 mt-2'>
           &copy;<span>copyright from AmarBazar.</span><br />
           <span> All rightd reserved by Bazar</span>
        </div>
        <div className='flex flex-col p-3 m-1 '>
            <h1>Links</h1>
            <Link className='cursor-pointer hover:underline '>Features</Link>
            <Link className='cursor-pointer hover:underline'>Categories</Link>
            <Link className='cursor-pointer hover:underline'>Discount Product</Link>
            <Link className='cursor-pointer hover:underline'>Contact</Link>
        </div>
    </div>
  )
}

export default Footer