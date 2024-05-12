import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

import styles from './slider.module.scss';

import SliderDotsPlate from './ui/sliderDotsPlate/SliderDotsPlate';
import SliderList from './components/sliderList/SliderList';
import SliderArrows from './ui/sliderArrows/SliderArrows';
import { useLoaderData } from 'react-router-dom';
import { useRef } from 'react';

export const SliderContext = createContext();

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const { promotions } = useLoaderData();

  //количество слайдов
  const slidersCount = 7;

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = slidersCount - 1;
    } else {
      slideNumber = (slide + direction) % slidersCount;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % slidersCount);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slidersCount, slide]);

  //Свайпы курсором

  const elementRef = useRef(null);

  let startX;

  const handleMouseDown = (event) => {
    startX = event.clientX;
  };

  const handleMouseUp = (event) => {
    const endX = event.clientX;

    const deltaX = endX - startX;

    if (deltaX > 0) {
      changeSlide(-1);
    } else if (deltaX < 0) {
      changeSlide(1);
    }
  };

  return (
    <div
      className={styles.sliderBase}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={elementRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: slidersCount,
          slideNumber: slide,
          promotions,
        }}
      >
        <SliderArrows />
        <SliderList />
        <SliderDotsPlate />
      </SliderContext.Provider>
    </div>
  );
};

export default Slider;
