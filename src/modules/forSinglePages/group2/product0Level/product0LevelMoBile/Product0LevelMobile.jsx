import React from 'react';

import styles from './product0LevelModile.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import MobileProductButton from '../../../../../ui/buttons/mobileProductButton/MobileProductButton';
import './animations.scss';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Product0LevelMobile = () => {
  const { categories, type } = useLoaderData();

  const [visibleCategories, setvisibleCategories] = useState(false);

  return (
    <div className={styles.MobilePlate}>
      <Await resolve={type}>
        {(resolvedType) => <h2 className={styles.MobileTitle}>{resolvedType[0].name}</h2>}
      </Await>
      <MobileProductButton width={100} type={'big'} onClick={() => setvisibleCategories(!visibleCategories)}>
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
