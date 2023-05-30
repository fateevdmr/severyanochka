import style from "./MyBlog.module.css";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../../App";
import { Link } from "react-router-dom";

const MyBlog = () => {
  const { articles, deleteArticle, handleSort } = useContext(ArticleContext);
  const navigate = useNavigate();
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.width}>
          <div className={style.btn}>
            <Link to="/addarticleform">Добавить статью</Link>
          </div>
          <div className={style.package}>
            <button className={style.sortBtn} onClick={handleSort}>
              Сортировка
            </button>
          </div>
          <div className={style.articlesContainer}>
            {articles.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={style.articleContainer}
                  onClick={() => navigate(`/article/${index}`)}
                >
                  <button
                    className={style.deleteBtn}
                    onClick={(event) => {
                      event.stopPropagation();
                      deleteArticle(index);
                    }}
                  >
                    X
                  </button>
                  <div className={style.container}>
                    <img className={style.photoArticles} src={item.img} />

                    <span className={style.article}>{item.title}</span>
                    <span className={style.description}>
                      {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBlog;
