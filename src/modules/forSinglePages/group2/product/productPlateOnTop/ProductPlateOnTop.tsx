import React, { MutableRefObject } from 'react';

import styles from './productPlateOnTop.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import ProductBuyPlate from '../productBuyPlate/ProductBuyPlate';
import ProductDescriptionPlate from '../productDescriptionPlate/ProductDescriptionPlate';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { Product, ProductImage } from '../../../../../utils/types';

interface ProductPlateOnTopProps {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ProductPlateOnTop: React.FC<ProductPlateOnTopProps> = ({ scrollRef }) => {
  const product: Product[] = useLoaderData() as Product[];
  const images: ProductImage[] = useLoaderData() as ProductImage[];

  const productRoute = useSelector((state: RootState) => state.imagesRoutes.product);

  return (
    <div className={styles.productPlate}>
      <div className={styles.productImagesPlate}>
        <div className={styles.productMainImagePlate}>
          <Await resolve={product}>
            {(product) => (
              <Link to={`images`} target="_blank">
                <img
                  className={styles.productMainImage}
                  src={`${productRoute}${product[0].image}`}
                  alt={'Основное изображение продукта'}
                />
              </Link>
            )}
          </Await>
        </div>
        <div className={styles.productBottomImagesPlate}>
          <Await resolve={images}>
            {(images) =>
              images.map((image, index) => (
                <Link to={`images`} key={index} target="_blank">
                  <img
                    className={styles.productBottomImage}
                    src={`${productRoute}${image.image}`}
                    alt={'Дополнительное изображение продукта'}
                  />
                </Link>
              ))
            }
          </Await>
        </div>
      </div>

      <Await resolve={product}>
        {(product) => <ProductDescriptionPlate product={product[0]} scrollRef={scrollRef} />}
      </Await>

      <Await resolve={product}>{(product) => <ProductBuyPlate product={product[0]} />}</Await>
    </div>
  );
};

export default ProductPlateOnTop;
