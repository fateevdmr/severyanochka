import React from "react";
import styles from "../Styles/vacancies.module.css";

interface VacancyCardProps {
  title: string;
  requirements: string;
  responsibilities: string;
  conditions: string;
  phone: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({
  title,
  requirements,
  responsibilities,
  conditions,
  phone,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.sectionTitle}>Требования</p>
      <p>{requirements}</p>
      <p className={styles.sectionTitle}>Обязанности</p>
      <p>{responsibilities}</p>
      <p className={styles.sectionTitle}>Условия</p>
      <p>{conditions}</p>
      <p className={styles.phoneLabel}>Звоните</p>
      <p className={styles.phoneNumber}>{phone}</p>
    </div>
  );
};

export default VacancyCard;
