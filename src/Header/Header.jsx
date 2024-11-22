import React from 'react'
import style from './Header.module.scss'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    <>
   <div className={style.top}>
<p>FREE SHIPPING ON ALL ORDERS OVER $75.00. LEARN MORE!</p>
   </div>
    <div className={style.bottom}>
      <i className={style.bars}><FaBars /></i>
      <div className={style.logo}>
        <h3>haute</h3>
      </div>
      <div className={style.navicon}>
        <div className={style.navbar}>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li className={style.dr}><a href="/">Shop</a>
               <div className={style.drop}>
                  <ul>
                    <li><a href="/">Shop Full Width</a></li>
                    <li><a href="/">Product Variation </a></li>
                    <li><a href="/">Cart</a></li>
                    <li><a href="/">Checkout</a></li>
                    <li><a href="/">My account</a></li>
                  </ul>
              </div>
              </li>
              <li><a href="/">Pages</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className={style.iconbox}>
          <i><CiSearch /></i>
          <i><IoPersonOutline /></i>
          <span>0</span>
          <a href="/wishlist"><i><FaRegHeart /></i></a>
          <a href="/basket"><i><CiShoppingCart /></i></a>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Header