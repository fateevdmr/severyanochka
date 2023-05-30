import React from "react";
import { accordionData } from '../../Data/Content';
import Accordion from "../../components/Accordion/Accordion";
import style from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={style.wrapper}>
      <h1 style={{ color: "#f2f2f2", fontSize: "80px" }}>Кот в сапогах</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default Faq;
