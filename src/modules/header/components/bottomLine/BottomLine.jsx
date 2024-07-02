import React, { useEffect } from 'react';

import styles from './bottomLine.module.scss';

import Pad from '../../../../ui/pad/Pad';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesBottomLine } from '../../../../actions/storeActions/categories';
import { Link } from 'react-router-dom';
import { HorizontalScroll } from '../../../../ui/horizontalScroll/HorisontalScroll';

const BottomLine = () => {
  const dispatchCategories = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesBottomLine);

  useEffect(() => {
    dispatchCategories(fetchCategoriesBottomLine());
  }, []);

  return (
    <nav className={styles.bottomLine}>
      <Pad>
        <HorizontalScroll>
          {categories.map((category) => (
            <Link to={'/category/' + category.id} key={category.id} className={styles.bottomLink}>
              <h5 className={styles.bottomText}>{category.name}</h5>
            </Link>
          ))}
        </HorizontalScroll>
      </Pad>
    </nav>
  );
};

export default BottomLine;
