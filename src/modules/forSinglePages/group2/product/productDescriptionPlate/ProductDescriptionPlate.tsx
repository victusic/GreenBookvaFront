import React, { MutableRefObject, useEffect } from 'react';

import styles from './productDescriptionPlate.module.scss';
import ProductDescriptionLine from '../../../../../ui/productDescriptionLine/ProductDescriptionLine.tsx';
import { Link, useLocation } from 'react-router-dom';
import StarsPlate from '../../../../../ui/starsPlate/StarsPlate';
import DiscountBadge from '../../../../../ui/badges/discountBadge/DiscountBadge';
import NoveltyBadge from '../../../../../ui/badges/noveltyBadge/NoveltyBadge';
import { Product } from '../../../../../utils/types/index.ts';
import SalesLeaderBadge from '../../../../../ui/badges/salesLeaderBadge/SalesLeaderBadge.tsx';

interface ProductDescriptionPlateProps {
  product: Product;
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ProductDescriptionPlate: React.FC<ProductDescriptionPlateProps> = ({ product, scrollRef }) => {
  const scrollToReviews = () => {
    //скролл до середины экрана ключевого элемента
    const element = scrollRef.current;
    if (!element) return;
    const elementRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const scrollToY = elementRect.top + elementRect.height / 2 - windowHeight / 2;

    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth',
    });
  };

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const tag = hash.substring(1);
    {
      tag === 'scroll' && scrollToReviews();
    }
  }, [location]);

  return (
    <div className={styles.productDescriptionPlate}>
      <div className={styles.productDescriptionLine}>
        <div className={styles.productDescriptionTitle}>
          <div className={styles.badgesPlate}>
            {product.badgeSalesLeader && <SalesLeaderBadge />}
            {product.badgeDiscount && <DiscountBadge />}
            {product.badgeNovelty && <NoveltyBadge />}
          </div>
          <StarsPlate rate={Number(product.review)} onClick={scrollToReviews} />
        </div>
        <div className={styles.productDescriptionValue}>
          <p className={styles.rateClick} onClick={scrollToReviews}>
            Оценить
          </p>
        </div>
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      {product.authorId ? (
        <Link to={`/author/${product.authorId}`}>
          <h5 className={styles.productAuthorName}>
            {product.authorName + ' '}
            {product.authorSurname && product.authorSurname}
          </h5>
        </Link>
      ) : (
        <div className={styles.productNoAuthor} />
      )}
      <ProductDescriptionLine value={product.publisher} link={`/publisher/${product.publisherId}`}>
        Издательство
      </ProductDescriptionLine>
      <ProductDescriptionLine value={product.manufacturer} link={`/manufacturer/${product.manufacturerId}`}>
        Производитель
      </ProductDescriptionLine>
      <ProductDescriptionLine value={product.yearOfPublication}>Год издания</ProductDescriptionLine>
      <ProductDescriptionLine value={product.circulation}>Тираж</ProductDescriptionLine>
      <ProductDescriptionLine value={product.binding}>Переплёт</ProductDescriptionLine>
      <ProductDescriptionLine value={product.numberOfPages}>Количество страниц</ProductDescriptionLine>
      <ProductDescriptionLine value={product.size}>Размер</ProductDescriptionLine>
      <ProductDescriptionLine value={product.weight}>Вес, г</ProductDescriptionLine>
      <ProductDescriptionLine value={product.ageRestrictionsId}>
        Возрастные ограничения
      </ProductDescriptionLine>
    </div>
  );
};

export default ProductDescriptionPlate;
