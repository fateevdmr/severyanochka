import React from 'react';
import style from '../Styles/footer.module.css';
import { Link } from 'react-router-dom';
import logoFooter from '../Images/logoFooter.png';
import { FaInstagram, FaVk, FaFacebookF, FaOdnoklassniki,} from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";


function Footer() {
    return (
        <div className={style.footerWrapper}>
            <div className={style.footerContent}>
                <img src={logoFooter} alt="Северяночка" className={style.logoFooter} />
                
                <nav className={style.navLinks}>
                    <a  className={style.link}>О компании</a>
                    <a  className={style.link}>Контакты</a>
                    <a  className={style.link}>Вакансии</a>
                    <a className={style.link}> Политика обработки персональных данных </a>
                </nav>

                <div className={style.socialLinks}>
                    <FaInstagram className={style.icon}{...(null as any)} />
                    <FaVk className={style.icon}{...(null as any)} />
                    <FaFacebookF className={style.icon}{...(null as any)} />
                    <FaOdnoklassniki className={style.icon}{...(null as any)} />
                </div>
                
                <div className={style.contactInfo}>
                    <span><IoCallOutline className={style.iconCall}{...(null as any)} /> 8 800 777 33 33</span>
                    <span className={style.design}>Дизайн <b>ZASOVSKIY</b></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;


{/* <nav className={style.navLinks}>
                    <Link to="/about" className={style.link}>О компании</Link>
                    <Link to="/contacts" className={style.link}>Контакты</Link>
                    <Link to="/vacancies" className={style.link}>Вакансии</Link>
                    <a className={style.link}> Политика обработки персональных данных </a>
                </nav> */}