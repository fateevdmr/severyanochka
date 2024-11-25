import React from "react";
import { useCart } from "../pages/CartContext";
import style from "../Styles/header.module.css";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { cart, favorites } = useCart();

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const favoritesCount = favorites.length;
  
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} className={style.logo} alt="Северяночка" />
      </Link>

      <button className={style.catalogButton}>Каталог</button>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Найти товар"
          className={style.searchInput}
        />
        <FaSearch className={style.searchIcon} />
      </div>
      <div className={style.headerInfo}>
        <Link to="/favorites">
          <span>Избранное: {favoritesCount}</span>
        </Link>
        <Link to="/cart">
          <span>Корзина: {cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
