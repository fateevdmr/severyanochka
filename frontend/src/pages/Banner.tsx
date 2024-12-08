import style from "../Styles/banner.module.css";

function Catalog() {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.promoBanner}>
          <span className={style.text}>
            Скидка 500 ₽ на первый заказ от 1500 ₽
          </span>
          <button className={style.deliveryButton}>ДОСТАВКА</button>
        </div>
      </div>
    </>
  );
}

export default Catalog;
