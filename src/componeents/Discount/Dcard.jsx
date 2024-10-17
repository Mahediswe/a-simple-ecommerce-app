// import React from 'react'
// import { FaCartShopping } from 'react-icons/fa6';
// import { useCart } from 'react-use-cart';

// const Dcard = ({id,name,img,price}) => {
//   const { addItem } = useCart();

//   const handleAddToCart = (id) => {
//     addItem(id);
//   };

//   return (
//     <div key={id} className='text-center bg-slate-200 '>
//         <div > 
//             <div className=''>
//                 <img src={img} alt="imge" className=' '/>
//             </div>
//             <div>
//                 <h1 className='font-bold'>{name}</h1>
//                 <h1 className='font-semibold'>{price}</h1>
//             </div>
//             <div>
//                   <button  onClick={handleAddToCart} className=' px-5'><FaCartShopping size={25} /></button>
//             </div>
//         </div>
 
//     </div>
//   )
// }

// export default Dcard

import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from 'react-use-cart';

const Dcard = ({ id, name, img, price }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const item = {
      id,
      title: name,
      price,
      img, // You can add the image if you want to include it in the cart
      quantity: 1, // Optional: set a default quantity
    };
    addItem(item);
  };

  return (
    <div key={id} className='text-center bg-slate-200'>
      <div>
        <img src={img} alt={name} className='' />
      </div>
      <div>
        <h1 className='font-bold'>{name}</h1>
        <h1 className='font-semibold'>${price}</h1>
      </div>
      <div>
        <button onClick={handleAddToCart} className='px-5'>
          <FaCartShopping size={25} />
        </button>
      </div>
    </div>
  );
};

export default Dcard;