import React, { useState, useEffect } from 'react';

import styles from './catalog.module.scss';
import Pad from '../../../../ui/pad/Pad';

import { HandySvg } from 'handy-svg';
import BookSvg from '../../../../assets/svg/book.svg';
import ChancerySvg from '../../../../assets/svg/сhancery.svg';
import AccessorySvg from '../../../../assets/svg/accessory.svg';

import { useDispatch, useSelector } from 'react-redux';
import { refreshHeadersCatalogAction } from '../../../../store/headerElementsReducer';
import { fetchCategoriesCatalog } from '../../../../actions/storeActions/categories';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const dispatchCategories = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesCatalog);

  //видимость
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state) => state.headersElements.catalog);

  const [stylePlate, setStylePlate] = useState(styles.plateHide);

  function changeCategory(type) {
    dispatchCategories(fetchCategoriesCatalog(type));
  }

  useEffect(() => {
    dispatchCategories(fetchCategoriesCatalog(1));
  }, []);

  useEffect(() => {
    {
      catalogVisible ? setStylePlate('') : setStylePlate(styles.plateHide);
    }
  }, [catalogVisible]);

  return (
    <Pad>
      <div className={styles.plate + ' ' + stylePlate}>
        <div className={styles.typePlate}>
          {/*На первом типе выдаёт ошибку при навигации*/}
          <div
            to={'/type/1'}
            className={styles.typeBox + ' ' + styles.typeSvgColor}
            onClick={() => changeCategory(1)}
          >
            <HandySvg src={BookSvg} className={styles.typeSvg} />
            <h6 className={styles.typeText}>Книги</h6>
          </div>
          <div
            to={'/type/2'}
            className={styles.typeBox + ' ' + styles.typeSvgColor}
            onClick={() => changeCategory(2)}
          >
            <HandySvg src={ChancerySvg} className={styles.typeSvg} />
            <h6 className={styles.typeText}>Канцелярия</h6>
          </div>
          <div
            to={'/type/3'}
            className={styles.typeBox + ' ' + styles.typeSvgColor}
            onClick={() => changeCategory(3)}
          >
            <HandySvg src={AccessorySvg} className={styles.typeSvg} />
            <h6 className={styles.typeText}>Аксессуары</h6>
          </div>
        </div>
        <div className={styles.categoryPlate}>
          {categories.map((category) => (
            <Link
              to={'/category/' + category.id}
              className={styles.categoryText}
              key={category.id}
              onClick={() => dispatchCatalogVisible(refreshHeadersCatalogAction(false))}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </Pad>
  );
};

export default Catalog;
