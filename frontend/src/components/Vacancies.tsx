import React from "react";
import styles from "../Styles/vacancies.module.css";
import vacanciesData from "../Data/vacanciesData";
import VacancyCard from "../components/VacancyCard";

const Vacancies = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.vacanciesContainer}>
        <h1 className={styles.title}>Вакансии</h1>
        <div className={styles.cardsContainer}>
          {vacanciesData.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              title={vacancy.title}
              requirements={vacancy.requirements}
              responsibilities={vacancy.responsibilities}
              conditions={vacancy.conditions}
              phone={vacancy.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;

