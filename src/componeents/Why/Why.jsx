import React from 'react'
import WhyCard from './WhyCard'
import { FaCarSide } from "react-icons/fa";
import { FaMoneyCheck } from 'react-icons/fa6';
import { BsWatch } from 'react-icons/bs';

const Why = () => {
    const icon1=(<FaCarSide size={36} className='mx-auto'/>);
    const icon2=(<FaMoneyCheck size={36} className='mx-auto'/>);
    const icon3=(<BsWatch size={36} className='mx-auto'/>);

  return (
    <div className='container flex flex-row bg-lime-200 w-full border-2 border-red-300'>
      <div className='grid grid-cols-3 gap-5'>
         <WhyCard icon={icon1} title=" Worldwide Delivery" />
         <WhyCard icon={icon2} title="Safe Payment" />
         <WhyCard icon={icon3} title="Support 24/7" />
      </div> 
    </div>
  )
}

export default Why
