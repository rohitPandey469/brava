"use client";

import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

// rotate elements of array to left or right based on the direction provided
function rotateArr(arr, direction) {
  let auxArr = [...arr];
  if (direction === -1) {
    const first = auxArr.shift();
    auxArr.push(first);
  } else {
    const last = auxArr.pop();
    auxArr.unshift(last);
  }
  return auxArr;
}

const Slider = () => {
  const [data, setData] = useState([
    { title: "heritage hoodies", imgSrc: "/img1.png" },
    { title: "premium zip hoodies", imgSrc: "/img2.png" },
    { title: "premium tees", imgSrc: "/img3.png" },
    { title: "heritage women's tanks", imgSrc: "/img4.png" },
    { title: "heritage tees", imgSrc: "/img5.png" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setData(rotateArr(data, -1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setData(rotateArr(data, 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${item.imgSrc})` }}
          >
            <div
              className={`${styles.textContainer} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <h2 className={styles.text}>{item.title}</h2>
              <button className={styles.shop}>shop now</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${styles.arrowButton} ${styles.left}`}
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className={`${styles.arrowButton} ${styles.right}`}
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
