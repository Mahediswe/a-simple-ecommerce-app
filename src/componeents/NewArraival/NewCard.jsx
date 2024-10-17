import React ,{useRef}from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewDeals from './New';
import { FaCartShopping } from 'react-icons/fa6';import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const NewCard = () => {
    const slider = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
      };

      return (
        <div className=''>
            <div>
            <div>
                <h4 className='font-bold text-3xl  pt-5 text-center'>New Arraival</h4>
                
                
            </div>
            <div>
                <button className='bg-blue-300' onClick={()=> slider.current.slickPrev()}> <FaArrowLeft size={35} /></button>
                <button className='bg-blue-300' onClick={()=> slider.current.slickNext()}> <FaArrowRight size={35} /></button>
            </div>
            </div>

            <div>
            <Slider {...settings}>
        {NewDeals.map((item,id)=>{
            return(
                <div className='container relative object-cover  rounded-xl '  key={id} >
                    
                    <div className='px-36 '>
                        <img src={item.image} alt="img" />
                        
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>{item.title}</h1>
                        <h3 className='font-bold text-center'>{item.price}</h3>
                        
                    </div>
                    <div className='text-center '>
                        <button className=' px-5 pt-3 '><FaCartShopping size={25}/></button>
                    </div>
                    
                </div>
            )
        })}


    </Slider>
            </div>
        </div>
        
      )
}

export default NewCard