import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import products from "../Data/produce";
import style from "../Styles/favoritePage.module.css";

const FavoritesPage: React.FC = () => {
  const { favorites } = useCart();

  useEffect(() => {}, [favorites]);

  const favoriteItems = favorites
    .map((id) => products.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <div className={style.container}>
      <h1>Избранное</h1>
      <div>
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => (
            <div key={item!.id}>
              <img src={item!.img} alt={item!.name} />
              <p>{item!.name}</p>
              <p>{item!.discountPrice} ₽</p>
            </div>
          ))
        ) : (
          <p>В избранном нет товаров</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
