import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import style from "../Styles/favoritesPage.module.css";
import axios from "axios";
import type { Product } from "../types/product";

const FavoritesPage: React.FC = () => {
  const { favorites, addToCart, addToFavorites } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  if (loading) {
    return (
      <div className={style.container}>
        <div className={style.loading}>Загрузка...</div>
      </div>
    );
  }

  if (favoriteProducts.length === 0) {
    return (
      <div className={style.container}>
        <div className={style.emptyMessage}>В избранном нет товаров</div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Избранное</h1>
      <div className={style.productsGrid}>
        {favoriteProducts.map((product) => (
          <div key={product.id} className={style.productCard}>
            <button
              className={`${style.favoriteButton} ${style.active}`}
              onClick={() => addToFavorites(product.id)}
              aria-label="Удалить из избранного"
            >
              ♥
            </button>
            <img
              src={product.img}
              alt={product.name}
              className={style.productImage}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.jpg";
              }}
            />
            <div className={style.productInfo}>
              <h3 className={style.productName}>{product.name}</h3>
              <div className={style.priceContainer}>
                <div className={style.prices}>
                  <span className={style.discountPrice}>
                    {product.discountPrice} ₽
                  </span>
                  <span className={style.originalPrice}>{product.price} ₽</span>
                </div>
                <button
                  className={style.addToCartButton}
                  onClick={() => {
                    addToCart(product.id);
                  }}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
