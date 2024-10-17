import React from 'react';
import Slider from "react-slick";
import Sdata from './Sdata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SlideCard = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        
      };
      return (
        <Slider {...settings}>
            {Sdata.map((value,index) => {
                return(
                    <section key={index} className='flex flex-row bg-sky-200'>
                        
                        <div className='w-1/2 m-4'>
                           <h1 className='text-3xl font-bold pt-10'>{value.title}</h1>
                           <h1 className='text-2xl pt-5 '>{value.desc}</h1>
                           
                        </div>
                        <div className='w-1/3 m-12  '>
                            <img src={value.cover} alt="slide-1" className='h-60 w-50 pt-7' />
                            <button className='bg-yellow-100 border-2 p-1 m-1 hover:font-medium border-red-400'>Visit More</button>
  
                        </div>
                    
                    </section>
                    
                )
            })}
          
        </Slider>
      );
   
 
}

export default SlideCard