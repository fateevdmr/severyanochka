import React from 'react';
// import style from '../Styles/contacts.module.css';
import style from '../Styles/contakts.module.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
// import map from '../Images/mapOne.png'

const Contacts: React.FC = () => {
    const containerStyle = {
        width: '500px',
        height: '400px'
    };
    return (
        <div className={style.contactsWrapper}>
            <h1 className={style.title}>Контакты</h1>
            <div className={style.contactInfo}>
                <div className={style.contactBlock}>
                    <span>📄 Бухгалтерия, склад</span>
                    <a href="tel:+78214092619">+7 82140 92619</a>
                </div>
                <div className={style.contactBlock}>
                    <span>❓ Вопросы по системе лояльности</span>
                    <a href="tel:+79087163397">+7 908 716 33 97</a>
                </div>
            </div>
            <h2 className={style.subTitle}>Наши магазины</h2>
            <div className={style.locationButtons}>
                <button className={style.locationButton}>п.Щельяюр</button>
                <button className={style.locationButton}>д.Вертеп</button>
                <button className={style.locationButton}>с.Краснобор</button>
                <button className={style.locationButton}>д.Диюр</button>
            </div>
            <div className={style.stores}>
                <div className={style.store}>
                    <h3 className={style.storeTitle}>ВОСХОД</h3>
                    <p>ул. Дорожная 10</p>
                    <a href="tel:+79042713590">+7 904 271 35 90</a>
                </div>
                <div className={style.store}>
                    <h3 className={style.storeTitle}>ПАРУС</h3>
                    <p>ул. Советская 87</p>
                    <a href="tel:+78214091330">+7 82140 91330</a>
                </div>
                <div className={style.store}>
                    <h3 className={style.storeTitle}>РЯБИНУШКА</h3>
                    <p>ул. Заводская 16</p>
                    <a href="tel:+78214091101">+7 82140 91101</a>
                </div>
                <div className={style.store}>
                    <h3 className={style.storeTitle}>ПЕЛЫСЬ</h3>
                    <p>ул. Рабочая 1</p>
                    <a href="tel:+78214091300">+7 82140 91300</a>
                </div>
            </div>
            <div className={style.mapWrapper}>
                {/* Вставьте карту здесь (например, Google Maps iframe) */}
                <LoadScript googleMapsApiKey='YOUR_API_KEY'>
            <GoogleMap
                // ...
            >
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
        </LoadScript>
            </div>
        </div>
    );
};

export default Contacts;

