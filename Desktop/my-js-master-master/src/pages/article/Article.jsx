import style from "./Article.module.css";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { ArticleContext } from "../../App";

const Article = () => {
  const params = useParams();
  const { articles } = useContext(ArticleContext);
  const articleData = articles[params.id];
  return (
    <div className={style.articlesContainer}>
      <div className={style.articleContainer}>
        <img
          className={style.photoArticles}
          src={articleData.img}
          alt="Фото статьи"
        />

        <span className={style.article}>{articleData.title}</span>
        <span className={style.description}>{articleData.description}</span>
        <span className={style.fullText}>
          {articleData.fullText.map((text, index) => (
            <p key={index} className={style.textArticle}>
              {text}
            </p>
          ))}
        </span>
        {articleData.newImg ? (
          <img className={style.photo} src={articleData.newImg} />
        ) : null}
      </div>
    </div>
  );
};

export default Article;
