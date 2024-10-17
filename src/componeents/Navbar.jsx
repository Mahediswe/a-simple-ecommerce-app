import React from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {
  const handlelogin=()=>{
    
  }
  return (
    
    <div className=' w-full z-10  fixed flex flex-row justify-between cursor-pointer text-lg font-semibold bg-slate-400 p-3 gap-5'>
        
        <div>
                <a href="">AmarBazar</a>
        </div>
        <div >
            <nav className='flex flex-row gap-20'>
                <Link to='home'spy={true} smooth={true} duration={500} className='hover:underline hover:text-xl'>Home</Link>
                <Link className='hover:underline hover:text-xl'>Features</Link>
                <Link className='hover:underline hover:text-xl'>Categories</Link>
                <Link to='discount' className='hover:underline hover:text-xl'>Discount Product</Link>
                <Link>Contact</Link>
                <button className='bg-blue-500 hover:font-light' onClick={handlelogin()}>LogIn</button>

            </nav>
        </div>
    </div>
  )
}

export default Navbar



