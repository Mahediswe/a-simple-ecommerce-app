import React from 'react'

const WhyCard = ({icon,title}) => {
  return (
    <div className=' text-center bg-slate-400 cursor-pointer rounded-md space-x-3 space-y-4 p-10 m-2 border-2 hover:bg-slate-500 hover:font-semibold  border-amber-600'>
            {icon}
            <h1 className=''>{title}</h1>
            <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, saepe.</p>
    </div>
  )
}

export default WhyCard