import React from "react";
import { useCart } from "../pages/CartContext";
import style from "../Styles/header.module.css";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
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
      <Link to='catalog'>
      <button className={style.catalogButton}>Каталог</button>
      </Link>
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
          <span><FaHeart /> {favoritesCount}</span>
        </Link>
        <Link to="/cart">
          <span><FaShoppingCart /> {cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
