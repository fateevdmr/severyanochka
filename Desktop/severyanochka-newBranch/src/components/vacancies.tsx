import React from 'react';
import styles from '../Styles/vacancies.module.css';

const vacanciesData = [
    {
        id: 1,
        title: "Должность",
        requirements: "Текст про требования текст про требования текст про требования текст про требования текст про требования",
        responsibilities: "Текст про обязанности текст про обязанности текст про обязанности текст про обязанности текст про обязанности",
        conditions: "Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия",
        phone: "+7 904 271 35 90",
    },
    { id: 2, title: "Должность", requirements: "Текст про требования...", responsibilities: "Текст про обязанности...", conditions: "Текст про условия...", phone: "+7 904 271 35 90" },
    { id: 3, title: "Должность", requirements: "Текст про требования...", responsibilities: "Текст про обязанности...", conditions: "Текст про условия...", phone: "+7 904 271 35 90" },
    { id: 4, title: "Должность", requirements: "Текст про требования...", responsibilities: "Текст про обязанности...", conditions: "Текст про условия...", phone: "+7 904 271 35 90" },
    { id: 5, title: "Должность", requirements: "Текст про требования...", responsibilities: "Текст про обязанности...", conditions: "Текст про условия...", phone: "+7 904 271 35 90" },
    { id: 6, title: "Должность", requirements: "Текст про требования...", responsibilities: "Текст про обязанности...", conditions: "Текст про условия...", phone: "+7 904 271 35 90" }
];

const Vacancies = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.vacanciesContainer}>
            <h1 className={styles.title}>Вакансии</h1>
            <div className={styles.cardsContainer}>
                {vacanciesData.map(vacancy => (
                    <div key={vacancy.id} className={styles.card}>
                        <h2 className={styles.cardTitle}>{vacancy.title}</h2>
                        <p className={styles.sectionTitle}>Требования</p>
                        <p>{vacancy.requirements}</p>
                        <p className={styles.sectionTitle}>Обязанности</p>
                        <p>{vacancy.responsibilities}</p>
                        <p className={styles.sectionTitle}>Условия</p>
                        <p>{vacancy.conditions}</p>
                        <p className={styles.phoneLabel}>Звоните</p>
                        <p className={styles.phoneNumber}>{vacancy.phone}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Vacancies;
