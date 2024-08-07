import React from 'react';

import ProductLeftBar from '../../../../../ui/productLeftBar/ProductLeftBar';

import styles from './product2LevelBar.module.scss';
import { Await, useLoaderData } from 'react-router-dom';
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
import { RootState } from '../../../../../store';
import { ProductCategory, ProductSubcategoryName, ProductType } from '../../../../../utils/types';

const Product2LevelBar: React.FC = () => {
  const category: ProductCategory[] = useLoaderData() as ProductCategory[];
  const subcategoryName: ProductSubcategoryName[] = useLoaderData() as ProductSubcategoryName[];
  const type: ProductType[] = useLoaderData() as ProductType[];

  const badges = useSelector((state: RootState) => state.filter.badges);
  const authors = useSelector((state: RootState) => state.filter.authors);
  const publishers = useSelector((state: RootState) => state.filter.publishers);
  const manufacturers = useSelector((state: RootState) => state.filter.manufacturers);
  const bindings = useSelector((state: RootState) => state.filter.bindings);

  const isStock = useSelector((state: RootState) => state.filter.isStock);
  const changeBindings = useSelector((state: RootState) => state.filter.changeBindings);
  const changeBadges = useSelector((state: RootState) => state.filter.changeBadges);
  const changeAuthors = useSelector((state: RootState) => state.filter.changeAuthors);
  const changePublishers = useSelector((state: RootState) => state.filter.changePublishers);
  const changeManufacturers = useSelector((state: RootState) => state.filter.changeManufacturers);

  const dispatchFilter = useDispatch();

  return (
    <ProductLeftBar>
      <Await resolve={subcategoryName}>
        {(subcategoryName) => <h2 className={styles.LeftBarTitle}>{subcategoryName[0].name}</h2>}
      </Await>

      <div className={styles.countLine}>
        <h4 className={styles.titleColor}>В наличии</h4>
        <Toggle checked={isStock} onChange={() => dispatchFilter(setIsStockAction(!isStock))} />
      </div>

      <Await resolve={type}>
        {(type) => (
          <NavigateBarArrow route="/type/" id={type[0].id}>
            {type[0].name}
          </NavigateBarArrow>
        )}
      </Await>

      <Await resolve={category}>
        {(category) => (
          <NavigateBarArrow route="/category/" id={category[0].id}>
            {category[0].name}
          </NavigateBarArrow>
        )}
      </Await>

      <FilterBlock
        params={badges}
        changeValue={setChangeBadgesAction}
        delValue={delChangeBadgesAction}
        value={changeBadges}
        addStyles={styles.antiMargin}
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

export default Product2LevelBar;
