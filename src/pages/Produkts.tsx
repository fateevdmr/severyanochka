import React, { useState } from "react";
import produce from "../Data/produce";
import style from "../Styles/productCard.module.css";
import { CiHeart } from "react-icons/ci";
import { useCart } from "./CartContext";

const Produkts: React.FC = () => {
  const {
    favorites,
    cart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useCart();

  const [promoOffset, setPromoOffset] = useState(0);
  const [newOffset, setNewOffset] = useState(0);

  const handleScroll = (
    offset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>,
    total: number
  ) => {
    setOffset((prev) => Math.max(0, Math.min(prev + offset, total - 4)));
  };

  return (
    <div className={style.container}>
      {/* Акции */}
      <div className={style.section}>
        <div className={style.sectionTitle}>Акции</div>
        <div className={style.productsWrapper}>
          {promoOffset > 0 && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonLeft}`}
              onClick={() =>
                handleScroll(
                  -1,
                  setPromoOffset,
                  produce.filter((p) => !p.isNew).length
                )
              }
            ></button>
          )}
          <div className={style.productsContainer}>
            {produce
              .filter((product) => !product.isNew)
              .slice(promoOffset, promoOffset + 4)
              .map((product) => (
                <div key={product.id} className={style.productCard}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={style.productImage}
                  />
                  <div className={style.productPrice}>
                    <b>{product.discountPrice}₽</b>{" "}
                    <span className={style.discountPrice}>
                      {" "}
                      {product.price}₽
                    </span>
                  </div>
                  <div className={style.productName}>{product.name}</div>
                  <div className={style.productRating}>
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                  {cart[product.id] ? (
                    <div className={style.cartControls}>
                      <button onClick={() => removeFromCart(product.id)}>
                        -
                      </button>
                      <span>{cart[product.id]}</span>
                      <button onClick={() => addToCart(product.id)}>+</button>
                    </div>
                  ) : (
                    <button
                      className={style.addToCartButton}
                      onClick={() => addToCart(product.id)}
                    >
                      В корзину
                    </button>
                  )}

                  <button
                    onClick={() =>
                      favorites.includes(product.id)
                        ? removeFromFavorites(product.id)
                        : addToFavorites(product.id)
                    }
                    className={`${style.favoriteButton} ${
                      favorites.includes(product.id) ? style.favoriteActive : ""
                    }`}
                  >
                    <CiHeart size={24} />
                  </button>
                </div>
              ))}
          </div>
          {promoOffset + 4 < produce.filter((p) => !p.isNew).length && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonRight}`}
              onClick={() =>
                handleScroll(
                  1,
                  setPromoOffset,
                  produce.filter((p) => !p.isNew).length
                )
              }
            ></button>
          )}
        </div>
      </div>

      {/* Новинки */}
      <div className={style.section}>
        <div className={style.sectionTitle}>Новинки</div>
        <div className={style.productsWrapper}>
          {newOffset > 0 && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonLeft}`}
              onClick={() =>
                handleScroll(
                  -1,
                  setNewOffset,
                  produce.filter((p) => p.isNew).length
                )
              }
            >
              {"<"}
            </button>
          )}
          <div className={style.productsContainer}>
            {produce
              .filter((product) => product.isNew)
              .slice(newOffset, newOffset + 4)
              .map((product) => (
                <div key={product.id} className={style.productCard}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={style.productImage}
                  />
                  <div className={style.productPrice}>
                    <b>{product.discountPrice}₽</b>{" "}
                    <span>{product.price}₽</span>
                  </div>
                  <div className={style.productName}>{product.name}</div>
                  <div className={style.productRating}>
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                  {cart[product.id] ? (
                    <div className={style.cartControls}>
                      <button onClick={() => removeFromCart(product.id)}>
                        -
                      </button>
                      <span>{cart[product.id]}</span>
                      <button onClick={() => addToCart(product.id)}>+</button>
                    </div>
                  ) : (
                    <button
                      className={style.addToCartButton}
                      onClick={() => addToCart(product.id)}
                    >
                      В корзину
                    </button>
                  )}
                  <button
                    onClick={() =>
                      favorites.includes(product.id)
                        ? removeFromFavorites(product.id)
                        : addToFavorites(product.id)
                    }
                    className={`${style.favoriteButton} ${
                      favorites.includes(product.id) ? style.favoriteActive : ""
                    }`}
                  >
                    <CiHeart size={24} />
                  </button>
                </div>
              ))}
          </div>
          {newOffset + 4 < produce.filter((p) => p.isNew).length && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonRight}`}
              onClick={() =>
                handleScroll(
                  1,
                  setNewOffset,
                  produce.filter((p) => p.isNew).length
                )
              }
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Produkts;
