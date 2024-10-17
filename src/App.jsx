import React from 'react';
//import Navbar from './componeents/Navbar.jsx';
import Header from './componeents/Header.jsx';
import SlideCard from './componeents/MainPage/SlideCard.jsx';
import FlashDeals from './componeents/Flash/FlashDeals.jsx';
import NewCard from './componeents/NewArraival/NewCard.jsx';
import Footer from './componeents/Footer.jsx';
import Discount from './componeents/Discount/Discount.jsx';
import About from './componeents/About.jsx';
import ReviewCard from './componeents/Review/ReviewCard.jsx';
import Why from './componeents/Why/Why.jsx';
import Mobile from './componeents/Mobile/Mobile.jsx';
import { CartProvider } from "react-use-cart";
import Cart from './componeents/Discount/Cart.jsx';
const App = () => {
  return (
    <div>
          <CartProvider>

      <Header/>
      <SlideCard/>
      <FlashDeals/>
      <NewCard/>
      <Discount/>
      <Mobile/>
      <About/>
      <ReviewCard/>
      <ReviewCard/>
      <Why/>
      <Footer/>
      <Cart/>
      </CartProvider>
      
    </div>
  )
}

export default App