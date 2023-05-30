import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import MyBlog from "../src/pages/MyBlog/MyBlog";
import Article from "../src/pages/article/Article";
import AddArticleForm from "../src/pages/AddArticleForm/AddArticleForm";
import React, { useState, useRef } from "react";
import { Data } from "./Data/Data";
import Footer from "./components/Footer/Footer";
import Faq from "../src/pages/Faq/Faq";
import GalleryImg from "../src/pages/GalleryImg/GalleryImg";
import Error from "../src/pages/Error/Error";
import moment from "moment";

export const ArticleContext = React.createContext();

function App() {
  const sortTypeAscending = useRef(true);
  const [articles, setArticles] = useState(Data);

  const handleSort = () => {
    console.log(sortTypeAscending);

    if (sortTypeAscending.current) {
      setArticles((prevState) => {
        return [...prevState].sort((a, b) => {
          return moment(b.date, "DD.MM.YY") - moment(a.date, "DD.MM.YY");
        });
      });
    } else {
      setArticles((prevState) => {
        return [...prevState].sort((a, b) => {
          return moment(a.date, "DD.MM.YY") - moment(b.date, "DD.MM.YY");
        });
      });
    }

    sortTypeAscending.current = !sortTypeAscending.current;
  };
  const deleteArticle = (articleIndex) => {
    setArticles((prevState) => {
      return [
        ...prevState.slice(0, articleIndex),
        ...prevState.slice(articleIndex + 1),
      ];
    });
  };

  const addArticle = (newArticle) => {
    setArticles((prevState) => [
      ...prevState,
      { ...newArticle, id: prevState.length - 1 },
    ]);
  };

  const context = {
    articles,
    deleteArticle,
    addArticle,
    handleSort,
  };

  return (
    <div>
      <Navbar />

      <ArticleContext.Provider value={context}>
        <div className="content">
          <Routes>
            <Route path="/article/:id" element={<Article />} />
            <Route path="/" element={<MyBlog />} />
            <Route path="/gallery-img" element={<GalleryImg />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/addarticleform" element={<AddArticleForm />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
