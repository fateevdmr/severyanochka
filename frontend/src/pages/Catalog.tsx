import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../Styles/catalog.module.css";
import { useCart } from "./CartContext";
import type { Product } from "../types/product";
import { useLocation } from "react-router-dom";

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  
  const { 
    addToCart, 
    removeFromCart,
    addToFavorites,
    favorites,
    cart
  } = useCart();

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5000/api/products")
      .then((response) => {
        // Фильтруем только товары с категорией catalog
        const catalogProducts = response.data.filter(
          (product) => product.category === 'catalog'
        );
        setProducts(catalogProducts);
        setFilteredProducts(catalogProducts);
        setLoading(false);
      })
      .catch(() => {
        setError("Не удалось загрузить продукты");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search')?.toLowerCase();

    if (searchQuery) {
      const filtered = products.filter(product => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchQuery) || 
               searchQuery.split(' ').some(word => productName.includes(word));
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search, products]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.sectionTitle}>Каталог продуктов</div>
      {filteredProducts.length === 0 ? (
        <div className={style.noResults}>Товары не найдены</div>
      ) : (
        <div className={style.productsContainer}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={style.productCard}>
              <button
                className={`${style.favoriteButton} ${
                  favorites.includes(product.id) ? style.active : ""
                }`}
                onClick={() => addToFavorites(product.id)}
              >
                ♥
              </button>
              <img 
                src={product.img} 
                alt={product.name} 
                className={style.productImage}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
              <div className={style.productInfo}>
                <h3>{product.name}</h3>
                <div className={style.priceContainer}>
                  <div className={style.price}>
                    <p className={style.currentPrice}>{product.discountPrice} ₽</p>
                    <p className={style.originalPrice}>{product.price} ₽</p>
                  </div>
                  {cart[product.id] ? (
                    <div className={style.cartControls}>
                      <button onClick={() => removeFromCart(product.id)}>-</button>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
