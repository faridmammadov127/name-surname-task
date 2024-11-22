import React from 'react'
import style from './Footer.module.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.haute}>
            <h1>haute</h1>
            <p>Our mission is to offer you the best selection of Nordic design, whether well-established or up-and-coming.</p>
            <div className={style.iconbox}>
              <i><FaFacebook /></i>
              <i><FaInstagram /></i>
              <i><FaPinterest /></i>
              <i><FaYoutube /></i>
            </div>

          </div>
          <div className={style.card}>
            <h4>Navigation</h4>
            <a href="">Home</a>
            <a href="">Catalog</a>
            <a href="">About</a>
            <a href="">Jurnal</a>
            <a href="">Contact</a>
          </div>
          <div className={style.card}>
            <h4>Informations</h4>
            <a href="">Delivery</a>
            <a href="">Return policy</a>
            <a href="">Team</a>
            <a href="">Store Locations</a>
            <a href="">F.A.Qs</a>
          </div>
          <div className={style.input}>
            <h4>Newsletter</h4>
            <p>Subscribe to get notified about product launches, special offers and news.</p>
            <input type="text" placeholder='faridmammadov03@icloud.com' />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={style.bottom}>
            <p>© 2021 Haute. Developed by Woostify.</p>
        </div>
      </div>

    </>
  )
}

export default Footer