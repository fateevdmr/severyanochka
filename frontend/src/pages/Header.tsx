import React, { useState } from "react";
import { useCart } from "./CartContext";
import style from "../Styles/header.module.css";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { cart, favorites } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const favoritesCount = favorites.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} className={style.logo} alt="Северяночка" />
      </Link>
      <Link to='catalog'>
        <button className={style.catalogButton}>Каталог</button>
      </Link>
      <form onSubmit={handleSearch} className={style.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Найти товар"
          className={style.searchInput}
        />
        <button type="submit" className={style.searchButton}>
          <FaSearch className={style.searchIcon} />
        </button>
      </form>
      <div className={style.headerInfo}>
        <Link to="/favorites" className={style.iconLink}>
          <FaHeart />
          {favoritesCount > 0 && <span className={style.count}>{favoritesCount}</span>}
        </Link>
        <Link to="/cart" className={style.iconLink}>
          <FaShoppingCart />
          {cartCount > 0 && <span className={style.count}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
