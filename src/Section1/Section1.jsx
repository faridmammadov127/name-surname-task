import React from 'react'
import style from './Section1.module.scss'
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaParachuteBox } from "react-icons/fa6";

const Section1 = () => {
  return (
    <>
    <div className={style.container}>
            <div className={style.yazi}>
                <p>Enhancing your
                inner beauty</p>
                <button>Shop Now</button>
            </div>
           
    </div>
     <div className={style.bottom}>
              <div className={style.phone}>
              <i><TbTruckDelivery /></i><p>Flat-rate Delivery</p>
              </div>
              <div className={style.phone}>
              <i><BiSupport /></i><p>Support 24/7</p>
              </div>
              <div className={style.phone}>
              <i><RiSecurePaymentLine /></i><p>Secure Payment</p>
              </div>
              <div className={style.phone}>
              <i><FaParachuteBox /></i><p>Free Return</p>
              </div>
            </div>
    </>
  )
}

export default Section1