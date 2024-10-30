import React, { useState } from 'react';
import style from '../Styles/produkts.module.css';
import { GoArrowRight } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import produce from '../Data/produce';
import newProduce from '../Data/newProduce';

function Produkts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newCurrentIndex, setNewCurrentIndex] = useState(0);

    // Акции
    const handleScrollRight = () => {
        if (currentIndex < produce.length - 4) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Новинки
    const handleNewScrollRight = () => {
        if (newCurrentIndex < newProduce.length - 4) {
            setNewCurrentIndex(newCurrentIndex + 1);
        }
    };

    return (
        <div className={style.produktsWrapper}>
            <div className={style.produkts}>
                <div className={style.allPromotions}>
                    <div className={style.promoOne}>Акции</div>
                    <div className={style.promoTwo} onClick={handleScrollRight}>
                        Все акции <GoArrowRight />
                    </div>
                </div>
                <div className={style.produceList}>
                    {produce.slice(currentIndex, currentIndex + 4).map((product) => (
                        <div key={product.id} className={style.produce}>
                            <div className={style.heartIcon}><CiHeart /></div>
                            <img src={product.img} alt={product.name} className={style.productImage} />

                            <div className={style.priceContainer}>
                                <span className={style.discountPrice}>{product.discountPrice}</span>
                                <span className={style.originalPrice}>{product.price}</span>
                            </div>

                            <p className={style.productName}>{product.name}</p>

                            <div className={style.rating}>
                                {'★'.repeat(product.rating)}
                                {'☆'.repeat(5 - product.rating)}
                            </div>

                            <button className={style.cartButton}>В корзину</button>
                        </div>
                    ))}
                </div>
                <div className={style.newItemsWrapper}>
                    <div className={style.allPromotions}>
                        <div className={style.promoOne}>Новинки</div>
                        <div className={style.promoTwo} onClick={handleNewScrollRight}>
                            Все новинки <GoArrowRight />
                        </div>
                    </div>
                    <div className={style.produceList}>
                        {newProduce.slice(newCurrentIndex, newCurrentIndex + 4).map((product) => (
                            <div key={product.id} className={style.produce}>
                                <div className={style.heartIcon}><CiHeart /></div>
                                <img src={product.img} alt={product.name} className={style.productImage} />

                                <div className={style.priceContainer}>
                                    <span className={style.discountPrice}>{product.discountPrice}</span>
                                    <span className={style.originalPrice}>{product.price}</span>
                                </div>

                                <p className={style.productName}>{product.name}</p>

                                <div className={style.rating}>
                                    {'★'.repeat(product.rating)}
                                    {'☆'.repeat(5 - product.rating)}
                                </div>

                                <button className={style.cartButton}>В корзину</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produkts;
