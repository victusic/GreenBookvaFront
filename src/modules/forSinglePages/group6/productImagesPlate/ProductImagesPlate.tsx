import React, { useEffect } from 'react';

import styles from './productImagesPlate.module.scss';
import { HandySvg } from 'handy-svg';

import ExitSvg from '../../../../assets/svg/exit.svg';
import { Await, Link, useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getProductOneImagesList } from '../../../../actions/requestActions/commodity';
import WhiteTile from '../../../../ui/buttons/whiteTile/WhiteTile';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { AnyResponse } from '../../../../actions/types/types';
import { ProductImageListDTO } from '../../../../actions/types/requestActions';
import { ProductImage } from '../../../../utils/types';

const ProductImagesPlate: React.FC = () => {
  const productRoute = useSelector((state: RootState) => state.imagesRoutes.product);

  const imagesList: ProductImage[] = useLoaderData() as ProductImage[];

  const [nowPosition, setNowPosition] = useState(0);
  const [position, setPosition] = useState(0);
  const [countImages, setCountImages] = useState(0);

  const { id } = useParams();

  //загрузка количества изображений
  getProductOneImagesList(Number(id || 0)).then((response: AnyResponse<ProductImageListDTO>) => {
    response.status
      ? setCountImages(0) // Если response.data - одиночный объект, то количество изображений будет 0
      : console.error(`Error ${response.code}: Failed to fetch images`);
  });

  useEffect(() => {
    {
      position <= countImages ? setNowPosition(position) : setPosition(0);
    }
    {
      position < 0 && setPosition(countImages);
    }
  }, [position]);

  //классические свайпы

  const [touchPosition, setTouchPosition] = useState(null);

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
      setPosition(position + 1);
    }

    if (direction < -10) {
      setPosition(position - 1);
    }

    setTouchPosition(null);
  };

  //свайвы курсором
  const elementRef = useRef(null);

  let startX;

  const handleMouseDown = (event) => {
    startX = event.clientX;
  };

  const handleMouseUp = (event) => {
    const endX = event.clientX;

    const deltaX = endX - startX;

    if (deltaX > 0) {
      setPosition(position - 1);
    } else if (deltaX < 0) {
      setPosition(position + 1);
    }
  };

  return (
    <Await resolve={imagesList}>
      {(imagesList) => (
        <div
          className={styles.mainPlate}
          ref={elementRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Link to={`/product/${id}`}>
            <HandySvg src={ExitSvg} className={styles.exitSvg} />
          </Link>
          <div className={styles.imagesPlate} style={{ left: `${nowPosition * -100}%` }}>
            {imagesList.map((image, index) => (
              <div className={styles.imagesLineComponent} key={index}>
                <img
                  className={styles.imagesMain}
                  src={productRoute + image.image}
                  alt={'Изображение продукта'}
                ></img>
              </div>
            ))}
          </div>
          <div className={styles.imagesListPlate}>
            {imagesList.map((image, index) => (
              <img
                className={styles.bottomImage}
                key={index}
                src={productRoute + image.image}
                onClick={() => setPosition(index)}
                alt={'Изображение продукта'}
              ></img>
            ))}
          </div>
          <div className={styles.navigateButtons}>
            {countImages > 0 && (
              <>
                <WhiteTile addStyle={styles.tileHover} onClick={() => setPosition(position - 1)}>
                  ❮
                </WhiteTile>
                <WhiteTile addStyle={styles.tileHover} onClick={() => setPosition(position + 1)}>
                  ❯
                </WhiteTile>
              </>
            )}
          </div>
        </div>
      )}
    </Await>
  );
};

export default ProductImagesPlate;
