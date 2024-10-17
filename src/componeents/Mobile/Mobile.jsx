import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import MobileData from './MobileData';

const Mobile = () => {
  return (
       <div>
        <div>
          <h6 className=' text-3xl font-extrabold text-center pt-7'>Mobile Phones</h6>
        </div>
        <div>
       
        
        {MobileData.map((item,id)=>{
            return(
                <div className='container relative object-cover items-center '  key={id} >
                   
                    <div className='text-center px-36 '>
                        <span className='bg-amber-500'>{item.discount} % OFF</span>
                        <img src={item.cover} alt="img" />
                        
                    </div>
                    <div className='text-center'>
                        
                        <h1 className='font-bold '>{item.name}</h1>
                        <h3 className='font-bold pt-3'>{item.price}</h3>
                    </div>
                    <div className='text-center '>
                        <button className=' px-5 pt-3'><FaCartShopping size={25}/></button>
                    </div>
                </div>
            )
        })}


    
        </div>
    </div>
    
  )
}

export default Mobile