import React from 'react'
import Dcard from './Dcard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Discount = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  const Ddata = [
    {
      id: 0,
      cover: "/src/assets/discount/discount-1.png",
      name: "BenuX 2022",
      price: "$250",
  
    },
    {
      id: 1,
      cover: "/src/assets/discount/discount-2.png",
      name: "Sony TV 1080p",
      price: "$450",
    },
    {
      id: 2,
      cover: "/src/assets/discount/discount-3.png",
      name: "Sony PS4",
      price: "$50",
    },
    {
      id: 3,
      cover: "/src/assets/discount/discount-4.png",
      name: "Setgearr 2022",
      price: "$100",
    },
    {
      id: 4,
      cover: "/src/assets/discount/discount-5.png",
      name: "Tony BGB",
      price: "$20",
    },
    {
      id: 5,
      cover: "/src/assets/discount/discount-6.png",
      name: "RG products",
      price: "$200",
    },
    {
      id: 6,
      cover: "/src/assets/discount/discount-7.png",
      name: "Ranasonic 2022",
      price: "$300",
    },
    {
      id: 7,
      cover: "/src/assets/discount/discount-8.png",
      name: "Pune HD",
      price: "$30",
    },
    {
      id: 8,
      cover: "/src/assets/discount/discount-9.png",
      name: "Sony CCTV",
      price: "$80",
    },
  ]


  return (
    <div >
      <div>
        <h6 className=' text-3xl font-extrabold'>Discount Product</h6>
        
      </div>
      <div className=' grid grid-cols-4 '>
        {Ddata.map((item)=>{
          return(
            <div className=' '>
              <Dcard key={item.id} 
              img={item.cover} 
              name={item.name} 
              price={item.price}
               />
              
            </div>

          );
        })}
        
      </div>

    </div>
  )
}

export default Discount