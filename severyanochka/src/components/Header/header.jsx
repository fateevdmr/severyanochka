import React from 'react';
import style from './header.module.css'
import logo from '../../images/logo.png'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';


function Header() {
  return (
    <header className={style.header}>
      <img
        src={logo}
        width={152}
        alt="Северяночка"
      />
    <button className={style.catalogButton}>Каталог</button>
    <div className={style.searchContainer}>
      <input
        type="text"
        placeholder="Найти товар"
        className={style.searchInput}
      />
      <FaSearch className={style.searchIcon} />
    </div>
    <div className={style.iconsContainer}>
      <FaHeart className={style.icon} />
      <FaShoppingCart className={style.icon} />
      <button className={style.loginButton}>Войти</button>
    </div>
  </header>
  );
}

export default Header;
