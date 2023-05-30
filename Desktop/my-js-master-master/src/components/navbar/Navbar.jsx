import React, {  useState } from "react";
import style from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const NAvbar = () => {
  const [nav, setNav] = useState(false);
  
  return (
    <header className={style.header}>
      <div className={style.box}>
        <div className={style.logoImage}>
          <Link to="/">
            <img
              className={style.logo}
              src='http://cdn.differencebetween.net/wp-content/uploads/2021/06/Difference-Between-Blog-and-Vlog-.jpeg'
              width={120}
              alt="Наш логотип"
            />
          </Link>
        </div>
        <ul
          className={nav ? [style.menu, style.active].join(" ") : [style.menu]}
        >
          <li className={style.li}>
            <Link to="/my-blog">Мой блог</Link>
          </li>
          
          <li>
            <a href="/gallery-img">Галерея</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          
        </ul>
        <div onClick={() => setNav(!nav)} className={style.mobileBtn}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  );
};

export default NAvbar;
