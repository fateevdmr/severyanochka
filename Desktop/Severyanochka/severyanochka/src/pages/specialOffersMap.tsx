import React, { useState } from 'react';
import style from '../Styles/specialOffersMap.module.css';
import { map } from '../Data/map';

function SpecialOffersMap() {
    const locations: string[] = ["п.Щельяюр", "д.Вертеп", "с.Краснобор", "д.Диор"];
    const [selectedMapIndex, setSelectedMapIndex] = useState<number>(0);

    const handleLocationChange = (index: number) => {
        setSelectedMapIndex(index);
    };

    return (
        <div className={style.specialOffersWrapper}>
            <div className={style.specialOffers}>
                <div className={style.text}>Специальные предложения</div>
                <div className={style.cardsContainer}>
                    <div className={style.card}>
                        <div className={style.titleOne}>Оформите карту «Северяночка»</div>
                        <div className={style.titleTwo}>И получайте бонусы при покупке в магазинах и на сайте</div> 
                        <div className={style.img}></div>
                    </div>
                    <div className={style.cardOne}>
                        <div className={style.titleOne}>Покупайте акционные товары</div>
                        <div className={style.titleTwo}>И получайте вдвое больше бонусов</div> 
                        <div className={style.imgOne}></div>
                    </div>
                </div>
                <h1 className={style.storesTitle}>Наши магазины</h1>
                <div className={style.buttonsContainer}>
                    {locations.map((location, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleLocationChange(index)}
                            className={`${style.locationButton} ${selectedMapIndex === index ? style.activeButton : ''}`}
                        >
                            {location}
                        </button>
                    ))}
                </div>
                <div className={style.mapContainer}>
                    <img src={map[selectedMapIndex].img} alt="Карта локации" className={style.mapImage} />
                </div>
            </div>
        </div>
    );
}

export default SpecialOffersMap;