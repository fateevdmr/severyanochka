import React, { useState } from "react";
import style from "./GalleryImg.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Gallery } from "../../Data/Gallery";

const GalleryImg = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setData({ img, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: Gallery[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setData({ img: Gallery[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      <div className={style.text}>Кот в сапогах: Последнее желание</div>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "30px",
            }}
          >
            X
          </button>
          <button
            className={style.btn}
            onClick={() => imgAction("previous-img")}
          >
            ◀
          </button>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "40%", maxHeight: "90%" }}
          />
          <button className={style.btn} onClick={() => imgAction("next-img")}>
            ▶
          </button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 6 }}>
          <Masonry style={{ gutter: "20px" }}>
            {Gallery.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{
                  width: "100%",
                  display: "block",
                  cursor: "pointer",
                  justifyContent: "center",
                }}
                alt="Кот в сапогах: Последнее желание"
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <div className={style.movies}>О фильме</div>
        <div className={style.history}>
          Бездумно потратив восемь жизней, Кот в сапогах впадает в панику:
          обстоятельства намекают, что бравому авантюристу пора выйти на пенсию
          и совсем скоро сразиться со смертью. Кот отправляется в дом
          престарелых, чтобы провести там последние дни, где он вынужденно носит
          ошейник и унизительно ходит в один лоток с остальными котами. Но ход
          его жизни может изменить звезда желаний, находящаяся в глуши тёмного
          леса.
        </div>
      </div>
      <center style={{ padding: "100px" }}>
        {" "}
        <iframe
          width="1300"
          height="700"
          src="https://www.youtube.com/embed/JA8Xw0ffel8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </center>
    </>
  );
};

export default GalleryImg;
