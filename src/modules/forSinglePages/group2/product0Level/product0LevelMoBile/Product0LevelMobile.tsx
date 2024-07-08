import React from 'react';

import styles from './product0LevelModile.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import MobileProductButton from '../../../../../ui/buttons/mobileProductButton/MobileProductButton';
import './animations.scss';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ProductCategory, ProductType } from '../../../../../utils/types';

const Product0LevelMobile: React.FC = () => {
  const categories: ProductCategory[] = useLoaderData() as ProductCategory[];
  const type: ProductType[] = useLoaderData() as ProductType[];

  const [visibleCategories, setVisibleCategories] = useState(false);

  return (
    <div className={styles.MobilePlate}>
      <Await resolve={type}>
        {(resolvedType) => <h2 className={styles.MobileTitle}>{resolvedType[0].name}</h2>}
      </Await>
      <MobileProductButton
        widthButton={100}
        typeButton="big"
        onClick={() => setVisibleCategories(!visibleCategories)}
      >
        Категории
      </MobileProductButton>
      <CSSTransition in={visibleCategories} timeout={600} classNames="categoriesList">
        <div className={styles.MobileCategoriesPlate + ' categoriesList'}>
          <Await resolve={categories}>
            {(resolvedCategory) =>
              resolvedCategory.map((category) => (
                <Link to={'/category/' + category.id} key={category.id}>
                  <p className={styles.MobileCategories}>{category.name}</p>
                </Link>
              ))
            }
          </Await>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Product0LevelMobile;
