import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Styles/header.module.css';
import logo from '../Images/logo.png'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';


function Header() {
    return ( <>
      <header className={style.header}>
      <Link to="/">
            <img src={logo} alt="Логотип" className={style.logoHeader} />
        </Link>
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
    </>
    );
  }
  
  export default Header;
  