import React from 'react';

import styles from './product1LevelModile.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import MobileProductButton from '../../../../../ui/buttons/mobileProductButton/MobileProductButton';
import './animations.scss';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  delChangeAuthorsAction,
  delChangeBadgesAction,
  delChangeBindingsAction,
  delChangeManufacturersAction,
  delChangePublishersAction,
  setChangeAuthorsAction,
  setChangeBadgesAction,
  setChangeBindingsAction,
  setChangeManufacturersAction,
  setChangePublishersAction,
  setIsStockAction,
} from '../../../../../store/filterProductsReducer';
import FilterBlock from '../../../../../ui/filterBlock/FilterBlock';
import FilterPrice from '../../../../../ui/filterPrice/FilterPrice';
import Toggle from '../../../../../ui/toggle/Toggle';

const Product1LevelMobile = () => {
  const { subcategories } = useLoaderData();

  const [visibleCategories, setvisibleCategories] = useState(false);
  const [visibleFilters, setvisibleFilters] = useState(false);

  const dispatchFilter = useDispatch();

  useEffect(() => {
    {
      visibleCategories && setvisibleFilters(false);
    }
  }, [visibleCategories]);

  useEffect(() => {
    {
      visibleFilters && setvisibleCategories(false);
    }
  }, [visibleFilters]);

  const badges = useSelector((state) => state.filter.badges);
  const authors = useSelector((state) => state.filter.authors);
  const publishers = useSelector((state) => state.filter.publishers);
  const manufacturers = useSelector((state) => state.filter.manufacturers);
  const bindings = useSelector((state) => state.filter.bindings);

  const isStock = useSelector((state) => state.filter.isStock);
  const changeBindings = useSelector((state) => state.filter.changeBindings);
  const changeBadges = useSelector((state) => state.filter.changeBadges);
  const changeAuthors = useSelector((state) => state.filter.changeAuthors);
  const changePublishers = useSelector((state) => state.filter.changePublishers);
  const changeManufacturers = useSelector((state) => state.filter.changeManufacturers);

  return (
    <div className={styles.MobilePlate}>
      <div className={styles.mobileButtonsPlate}>
        <MobileProductButton type={'small'} onClick={() => setvisibleCategories(!visibleCategories)}>
          Категории
        </MobileProductButton>
        <MobileProductButton type={'small'} onClick={() => setvisibleFilters(!visibleFilters)}>
          Фильтры
        </MobileProductButton>
      </div>
      <CSSTransition in={visibleCategories} timeout={600} classNames="categoriesList">
        <div className={styles.MobileCategoriesPlate + ' categoriesList'}>
          <Await resolve={subcategories}>
            {(resolvedCategory) =>
              resolvedCategory.map((category) => (
                <Link to={'/subcategory/' + category.id} key={category.id}>
                  <p className={styles.MobileCategories}>{category.name}</p>
                </Link>
              ))
            }
          </Await>
        </div>
      </CSSTransition>
      <CSSTransition in={visibleFilters} timeout={600} classNames="categoriesList">
        <div className={styles.MobileCategoriesPlate + ' categoriesList'}>
          <FilterBlock
            params={badges}
            changeValue={setChangeBadgesAction}
            delValue={delChangeBadgesAction}
            value={changeBadges}
          >
            Статус
          </FilterBlock>
          <FilterBlock
            params={authors}
            changeValue={setChangeAuthorsAction}
            delValue={delChangeAuthorsAction}
            value={changeAuthors}
          >
            Авторы
          </FilterBlock>
          <FilterBlock
            params={publishers}
            changeValue={setChangePublishersAction}
            delValue={delChangePublishersAction}
            value={changePublishers}
          >
            Издательства
          </FilterBlock>
          <FilterBlock
            params={manufacturers}
            changeValue={setChangeManufacturersAction}
            delValue={delChangeManufacturersAction}
            value={changeManufacturers}
          >
            Бренды
          </FilterBlock>
          <FilterBlock
            params={bindings}
            changeValue={setChangeBindingsAction}
            delValue={delChangeBindingsAction}
            value={changeBindings}
          >
            Переплёт
          </FilterBlock>
          <FilterPrice />
        </div>
      </CSSTransition>
      <div className={styles.countLine}>
        <h4 className={styles.titleColor}>В наличии</h4>
        <Toggle checked={isStock} onChange={() => dispatchFilter(setIsStockAction(!isStock))} />
      </div>
    </div>
  );
};

export default Product1LevelMobile;
