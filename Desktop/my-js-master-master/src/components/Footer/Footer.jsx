import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerBg}>
        <div className={style.footerInfoWrapper}>
          <div className={style.footerInfo}>
            <div className={style.footerAppInfo}>
              © «<span>My</span>Blog», 2023
            </div>
            <div>
              Приложение разработал Фатеев Дмитрий, звоните:
              <a className={style.mail} href="tel:+7 968 569 2113">7 968 569 2113</a>,
            </div>
            <div>
              предложения по сотрудничеству отправляйте на почту:
               <a className={style.mail} href="mailto: fateevdmr@gmail.com">fateevdmr@gmail.com</a>
            </div>
          </div>

          <div className={style.footerBtnUp}>
            <a href="#top">Наверх</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
