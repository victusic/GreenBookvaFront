import React from 'react';

import ProductLeftBar from '../../../../../ui/productLeftBar/ProductLeftBar';

import styles from './product1LevelBar.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import NavigateBarArrow from '../../../../../ui/navigate/navigateBarArrow/NavigateBarArrow';
import Toggle from '../../../../../ui/toggle/Toggle';
import FilterBlock from '../../../../../ui/filterBlock/FilterBlock';
import FilterPrice from '../../../../../ui/filterPrice/FilterPrice';
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

const Product1LevelBar = () => {
  const { subcategories, categoryName, type } = useLoaderData();

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

  const dispatchFilter = useDispatch();

  return (
    <ProductLeftBar>
      <Await resolve={categoryName}>
        {(categoryName) => <h2 className={styles.LeftBarTitle}>{categoryName[0].name}</h2>}
      </Await>

      <div className={styles.countLine}>
        <h4 className={styles.titleColor}>В наличии</h4>
        <Toggle checked={isStock} onChange={() => dispatchFilter(setIsStockAction(!isStock))} />
      </div>

      <Await resolve={type}>
        {(typeName) => (
          <NavigateBarArrow route="/type/" id={typeName[0].id}>
            {typeName[0].name}
          </NavigateBarArrow>
        )}
      </Await>

      <Await resolve={categoryName}>
        {(categoryName) => <p className={styles.LeftBarCategoriesTitle}>{categoryName[0].name}</p>}
      </Await>

      <Await resolve={subcategories}>
        {(resolvedCategory) =>
          resolvedCategory.map((category, index) => (
            <Link to={'/subcategory/' + category.id} className={styles.LeftBarCategories} key={index}>
              {category.name}
            </Link>
          ))
        }
      </Await>
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
    </ProductLeftBar>
  );
};

export default Product1LevelBar;
