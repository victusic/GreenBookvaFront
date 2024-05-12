import React, { useEffect } from 'react';

import styles from './productDescriptionPlate.module.scss';
import ProductDescriptionLine from '../../../../../ui/productDescriptionLine/ProductDescriptionLine';
import { Link, useLocation } from 'react-router-dom';
import StarsPlate from '../../../../../ui/starsPlate/StarsPlate';
import SalesLederBadge from '../../../../../ui/badges/salesLederBadge/SalesLederBadge';
import DiscountBadge from '../../../../../ui/badges/discountBadge/DiscountBadge';
import NoveltyBadge from '../../../../../ui/badges/noveltyBadge/NoveltyBadge';

const ProductDescriptionPlate = ({ product, scrollRef }) => {
  const scrollToReviews = () => {
    //скролл до середины экрана ключевого элемента
    const element = scrollRef.current;
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
            {product.badge_sales_leder && <SalesLederBadge />}
            {product.badge_discount && <DiscountBadge />}
            {product.badge_novelty && <NoveltyBadge />}
          </div>
          <StarsPlate rate={product.review} onClick={scrollToReviews} />
        </div>
        <div className={styles.productDescriptionValue}>
          <p className={styles.rateClick} onClick={scrollToReviews}>
            Оценить
          </p>
        </div>
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      {product.autor_id ? (
        <Link to={`/author/${product.autor_id}`}>
          <h5 className={styles.productAuthorName}>
            {product.autor_name + ' '}
            {product.autor_surname && product.autor_surname}
          </h5>
        </Link>
      ) : (
        <div className={styles.productNoAuthor} />
      )}
      <ProductDescriptionLine value={product.publisher} link={`/publisher/${product.publisher_id}`}>
        Издательство
      </ProductDescriptionLine>
      <ProductDescriptionLine value={product.manufacturer} link={`/manufacturer/${product.manufacturer_id}`}>
        Производитель
      </ProductDescriptionLine>
      <ProductDescriptionLine value={product.year_of_publication}>Год издания</ProductDescriptionLine>
      <ProductDescriptionLine value={product.circulation}>Тираж</ProductDescriptionLine>
      <ProductDescriptionLine value={product.binding}>Переплёт</ProductDescriptionLine>
      <ProductDescriptionLine value={product.number_of_pages}>Количество страниц</ProductDescriptionLine>
      <ProductDescriptionLine value={product.size}>Размер</ProductDescriptionLine>
      <ProductDescriptionLine value={product.weight}>Вес, г</ProductDescriptionLine>
      <ProductDescriptionLine value={product.age_restrictions}>Возрастные ограничения</ProductDescriptionLine>
    </div>
  );
};

export default ProductDescriptionPlate;
