import React from "react";
import style from "../Styles/contakts.module.css";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

const Contacts: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  
  const onSubmit = (data: FormData) => {
    console.log(data);

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
      <div className={style.mapWrapper}></div>
      <div className="contact-form-container">
        <h2>
          Группа компаний «СЕВЕРЯНОЧКА» рассматривает социальную ответственность
          как необходимое условие развития своего бизнеса. Заполняйте форму,
          если вам стали известны факты коррупции, конфликта интересов,
          нарушения закупочных процедур, нарушения антимонопольного
          законодательства, злоупотребления должностными полномочиями,
          дискриминации, нарушения норм отраслевого законодательства, норм
          саморегулирования, нарушения Корпоративного кодекса и политик Компании
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.contactForm}>
          <div className={style.formGroup}>
            <label htmlFor="fullName">ФИО</label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: "Это поле обязательно" })}
            />
            {errors.fullName && <span>{errors.fullName.message}</span>}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "Это поле обязательно" })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Неверный формат email",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              {...register("message", { required: "Это поле обязательно" })}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
