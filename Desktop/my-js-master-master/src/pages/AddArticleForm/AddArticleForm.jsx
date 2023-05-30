import style from "./AddArticleForm.module.css";
import { useState } from "react";
import React, { useContext, useEffect, hook } from "react";
import { ArticleContext } from "../../App";
import { json, useNavigate } from "react-router-dom";

const AddArticleForm = () => {
  const { addArticle } = useContext(ArticleContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fullText, setFullText] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  function createForm(e) {
    e.preventDefault();

    addArticle({ description, fullText, img, title });
    navigate("/");
  }

  return (
    <>
      <div className={style.widht}>
        <form className={style.form}>
          <h1 className={style.addArticle}>Добавить статью</h1>
          <div>
            <label className={style.article}>Article Title</label>
            <input
              className={style.title}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              requered
            />
          </div>

          <div>
            <label className={style.article}>Full Text </label>
            <textarea
              className={style.fullText}
              onChange={(e) => setFullText(e.target.value)}
              value={fullText}
            />
          </div>
          <label className={style.article}>Img</label>
          <div>
            <input
              className={style.img}
              onChange={(e) => setImg(e.target.value)}
              value={img}
            />
          </div>

          <button className={style.btn} onClick={createForm}>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default AddArticleForm;
