import React from 'react';
import style from '../Styles/about.module.css'
import teamImage from '../Images/people.png'

const About: React.FC = () => {
    return (
        <div className={style.aboutWrapper}>
            <h1 className={style.title}>О компании</h1>
            <p className={style.description}>
                Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших клиентах, стремимся к лучшему будущему.
            </p>
            <div className={style.imageWrapper}>
                <img src={teamImage} alt="Команда" className={style.teamImage} />
            </div>
            <div className={style.infoBlocks}>
                <div className={style.infoBlock}>
                    <span className={style.icon}>✔️</span>
                    <p>Мы занимаемся розничной торговлей<br /><b>Более 20 лет.</b></p>
                </div>
                <div className={style.infoBlock}>
                    <span className={style.icon}>✔️</span>
                    <p>Основная миссия компании<br /><b>Максимальное качество товаров и услуг по доступной цене.</b></p>
                </div>
                <div className={style.infoBlock}>
                    <span className={style.icon}>✔️</span>
                    <p>Отличительная черта нашей сети<br /><b>Здоровая и полезная продукция местного производства в наших магазинах.</b></p>
                </div>
            </div>
            <div className={style.footerMessage}>
                Спасибо за то, что вы с нами. Северяночка, везет всегда!
            </div>
        </div>
    );
};

export default About;