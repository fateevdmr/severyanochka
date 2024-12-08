import React, { useState, useEffect } from "react";
import style from "../Styles/contakts.module.css";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [formData, setFormData] = useLocalStorage<FormData>("contactFormData", {
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formData
  });

  
  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => {
      setValue(key as keyof FormData, value);
    });
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormData(data);

    setSubmitted(true);
    reset(); 
    setTimeout(() => setSubmitted(false), 3000);
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
          <input
            {...register("fullName", { required: "Это поле обязательно" })}
            placeholder="Ваше имя"
            className={errors.fullName ? style.error : ""}
          />
          {errors.fullName && (
            <span className={style.errorMessage}>{errors.fullName.message}</span>
          )}
        </div>

        <div className={style.formGroup}>
          <input
            {...register("phone", {
              required: "Это поле обязательно",
              pattern: {
                value: /^\+?[0-9]{10,12}$/,
                message: "Некорректный номер телефона"
              }
            })}
            placeholder="Номер телефона"
            className={errors.phone ? style.error : ""}
          />
          {errors.phone && (
            <span className={style.errorMessage}>{errors.phone.message}</span>
          )}
        </div>

        <div className={style.formGroup}>
          <input
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный email"
              }
            })}
            placeholder="Email"
            className={errors.email ? style.error : ""}
          />
          {errors.email && (
            <span className={style.errorMessage}>{errors.email.message}</span>
          )}
        </div>

        <div className={style.formGroup}>
          <textarea
            {...register("message")}
            placeholder="Ваше сообщение"
            className={style.messageInput}
          />
        </div>

        <button type="submit" className={style.submitButton}>
          Отправить
        </button>

        {submitted && (
          <div className={style.successMessage}>
            Обращение отправлено
          </div>
        )}
      </form>

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
      </div>
    </div>
  );
};

export default Contacts;
