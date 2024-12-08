import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../Styles/productCard.module.css";
import { CiHeart } from "react-icons/ci";
import { useCart } from "./CartContext";
import { FaHeart } from "react-icons/fa6";
import type { Product } from "../types/product";

const ProductsMain: React.FC = () => {
  const {
    favorites,
    cart,
    addToFavorites,
    addToCart,
    removeFromCart,
  } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stockOffset, setStockOffset] = useState(0);
  const [newOffset, setNewOffset] = useState(0);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Не удалось загрузить продукты");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const stockProducts = products.filter(product => product.category === 'stock');
  const newProducts = products.filter(product => product.category === 'newProducts');

  const handleScroll = (
    direction: 'prev' | 'next',
    currentOffset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>,
    maxLength: number
  ) => {
    if (direction === 'prev' && currentOffset > 0) {
      setOffset(currentOffset - 1);
    } else if (direction === 'next' && currentOffset + 4 < maxLength) {
      setOffset(currentOffset + 1);
    }
  };

  return (
    <div className={style.container}>
      {/* Акции */}
      <div className={style.section}>
        <div className={style.sectionTitleOne}>Акции</div>
        <div className={style.productsWrapper}>
          {stockOffset > 0 && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonLeft}`}
              onClick={() => handleScroll('prev', stockOffset, setStockOffset, stockProducts.length)}
            >
              {"<"}
            </button>
          )}
          <div className={style.productsContainer}>
            {stockProducts.slice(stockOffset, stockOffset + 4).map((product) => (
              <div key={product.id} className={style.productCard}>
                <button
                  className={style.favoriteButton}
                  onClick={() => addToFavorites(product.id)}
                >
                  {favorites.includes(product.id) ? (
                    <FaHeart className={style.heartIcon} />
                  ) : (
                    <CiHeart className={style.heartIcon} />
                  )}
                </button>
                <img
                  src={product.img}
                  alt={product.name}
                  className={style.productImage}
                />
                <div className={style.priceBlock}>
                  <div className={style.prices}>
                    <span className={style.discountPrice}>
                      {product.discountPrice} ₽
                    </span>
                    <span className={style.regularPrice}>
                      {product.price} ₽
                    </span>
                  </div>
                </div>
                <div className={style.productName}>{product.name}</div>
                <div className={style.rating}>
                  {Array.from({ length: Math.floor(product.rating) }).map(
                    (_, index) => (
                      <span key={index} className={style.star}>
                        ⭐
                      </span>
                    )
                  )}
                </div>
                {cart[product.id] ? (
                  <div className={style.cartControls}>
                    <button
                      className={style.cartControl}
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                    <span className={style.quantity}>
                      {cart[product.id]}
                    </span>
                    <button
                      className={style.cartControl}
                      onClick={() => addToCart(product.id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={style.addToCartButton}
                    onClick={() => addToCart(product.id)}
                  >
                    В корзину
                  </button>
                )}
              </div>
            ))}
          </div>
          {stockOffset + 4 < stockProducts.length && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonRight}`}
              onClick={() => handleScroll('next', stockOffset, setStockOffset, stockProducts.length)}
            >
              {">"}
            </button>
          )}
        </div>
      </div>

      {/* Новинки */}
      <div className={style.section}>
        <div className={style.sectionTitleTwo}>Новинки</div>
        <div className={style.productsWrapper}>
          {newOffset > 0 && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonLeft}`}
              onClick={() => handleScroll('prev', newOffset, setNewOffset, newProducts.length)}
            >
              {"<"}
            </button>
          )}
          <div className={style.productsContainer}>
            {newProducts.slice(newOffset, newOffset + 4).map((product) => (
              <div key={product.id} className={style.productCard}>
                <button
                  className={style.favoriteButton}
                  onClick={() => addToFavorites(product.id)}
                >
                  {favorites.includes(product.id) ? (
                    <FaHeart className={style.heartIcon} />
                  ) : (
                    <CiHeart className={style.heartIcon} />
                  )}
                </button>
                <img
                  src={product.img}
                  alt={product.name}
                  className={style.productImage}
                />
                <div className={style.priceBlock}>
                  <div className={style.prices}>
                    <span className={style.discountPrice}>
                      {product.discountPrice} ₽
                    </span>
                    <span className={style.regularPrice}>
                      {product.price} ₽
                    </span>
                  </div>
                </div>
                <div className={style.productName}>{product.name}</div>
                <div className={style.rating}>
                  {Array.from({ length: Math.floor(product.rating) }).map(
                    (_, index) => (
                      <span key={index} className={style.star}>
                        ⭐
                      </span>
                    )
                  )}
                </div>
                {cart[product.id] ? (
                  <div className={style.cartControls}>
                    <button
                      className={style.cartControl}
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                    <span className={style.quantity}>
                      {cart[product.id]}
                    </span>
                    <button
                      className={style.cartControl}
                      onClick={() => addToCart(product.id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={style.addToCartButton}
                    onClick={() => addToCart(product.id)}
                  >
                    В корзину
                  </button>
                )}
              </div>
            ))}
          </div>
          {newOffset + 4 < newProducts.length && (
            <button
              className={`${style.arrowButton} ${style.scrollButtonRight}`}
              onClick={() => handleScroll('next', newOffset, setNewOffset, newProducts.length)}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsMain;
