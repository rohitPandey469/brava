import React from "react";
import style from "./Semi.module.css";

const Semi = () => {
  const data = [
    { text: "$Hoskey", imgSrc: "/s3.png", bgColor: "lightBlue" },
    { text: "bitfins", imgSrc: "/s6.png", bgColor: "darkblue" },
    { text: "future test", imgSrc: "/s1.png", bgColor: "black" },
    { text: "vudu brigada", imgSrc: "/s2.png", bgColor: "black" },
    { text: "Crypto", imgSrc: "/s5.png", bgColor: "pink" },
    { text: "$Honky", imgSrc: "/s4.png", bgColor: "black" },
  ];
  return (
    <div className={style.movingContainer}>
      <div className={style.movingContent}>
        {data.map((item, index) => (
          <div style={{ backgroundColor: item.bgColor }} className={style.container}>
            <div className={style.imgContainer}>
              <img className={style.img} src={item.imgSrc} alt="" />
            </div>
            <div className={style.textContainer}>
              <div className={style.text}>{item.text}</div>
              <div className={style.textbtn}>shop now</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Semi;
