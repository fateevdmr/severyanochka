import React from 'react';
import style from '../Styles/header.module.css';
import logo from '../Images/logo.png'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';


function Header() {
    return ( <>
      <header className={style.header}>
        <img
          src={logo}
          className={style.img}
          alt="Северяночка"
        />
      <button className={style.catalogButton}>Каталог</button>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Найти товар"
          className={style.searchInput}
        /> 
        <FaSearch className={style.searchIcon} {...(null as any)} />
      </div>
      <div className={style.iconsContainer}>
        <FaHeart className={style.icon} {...(null as any)} />
        <FaShoppingCart className={style.icon} {...(null as any)} />
        <button className={style.loginButton}>Войти</button>
      </div>
    </header>
    <div className={style.promoBanner}>
            <span className={style.text}>Скидка 500 ₽ на первый заказ от 1500 ₽</span>
            <button className={style.deliveryButton}>ДОСТАВКА</button>
        </div>
    </>
    );
  }
  
  export default Header;
  