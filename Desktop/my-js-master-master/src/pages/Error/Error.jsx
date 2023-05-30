import style from "./Error.module.css";
import error from "../../assets/img/error.avif";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.container}>
        <div className={style.error}>
          <img src={error} width="500px" height="500px"></img>
          <div className={style.wrapper}>Страница не найдена</div>
          <div className={style.text}>
            К сожалению, неправильно набран адрес, или такой страницы на сайте
            больше не существует.
          </div>
          <div className={style.goAtHome} onClick={() => navigate("/")}>
            Перейти на главную
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;
