import React, { Dispatch, SetStateAction, useMemo } from 'react';
import ProductCard from '../../../ui/productCard/ProductCard';

import styles from './productPlate.module.scss';
import { useState } from 'react';
import {
  getCountProductsList,
  getProductsList,
  getInfoProductsList,
} from '../../../actions/requestActions/commodity';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HighPaddingButton from '../../../ui/buttons/highPaddingButton/HighPaddingButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthorsAction,
  setBadgesAction,
  setBindingsAction,
  setManufacturersAction,
  setPublishersAction,
  setResetFilterAction,
  setVisibleNoFilterAction,
  setVisiblePagesAction,
} from '../../../store/filterProductsReducer';
import { RootState } from '../../../store';
import { FilterType } from '../../../store/types/filterProductsReducer';
import { Product } from '../../../utils/types';
import { AnyResponse } from '../../../actions/types/types';
import { ProductDTO } from '../../../actions/types/requestActions';

interface ProductPlateProps {
  setTotalCount: Dispatch<SetStateAction<number>>;
  limit: number;
  currentPage: number;
  sort: number;
  requestType: string;
}

const ProductPlate: React.FC<ProductPlateProps> = ({
  setTotalCount,
  limit,
  currentPage,
  sort,
  requestType,
}) => {
  const { id } = useParams();

  const [products, setProducts] = useState<Product[]>([]);

  const [infoProducts, setInfoProducts] = useState<Product[]>([]);

  const isStock = useSelector((state: RootState) => state.filter.isStock);
  const changeBindings = useSelector((state: RootState) => state.filter.changeBindings);
  const changeBadges = useSelector((state: RootState) => state.filter.changeBadges);
  const changeAuthors = useSelector((state: RootState) => state.filter.changeAuthors);
  const changePublishers = useSelector((state: RootState) => state.filter.changePublishers);
  const changeManufacturers = useSelector((state: RootState) => state.filter.changeManufacturers);
  const changeMinPrice = useSelector((state: RootState) => state.filter.changeMinPrice);
  const changeMaxPrice = useSelector((state: RootState) => state.filter.changeMaxPrice);

  const visibleNoFilter = useSelector((state: RootState) => state.filter.visibleNoFilter);

  const dispatchFilter = useDispatch();

  useMemo(() => {
    //загрузка данных
    getProductsList(
      requestType,
      Number(id) || 0,
      limit,
      currentPage,
      sort,
      isStock,
      changeBindings,
      changeBadges,
      changeAuthors,
      changePublishers,
      changeManufacturers,
      changeMinPrice,
      changeMaxPrice,
    )
      .then((response: AnyResponse<ProductDTO[]>) => {
        response.status
          ? setProducts(response.data)
          : console.error(`Error ${response.code}: Failed to fetch products`);
      })
      .catch((error) => console.error('Network error:', error));
    //загрузка кол-ва товаров
    getCountProductsList(
      requestType,
      Number(id) || 0,
      isStock,
      changeBindings,
      changeBadges,
      changeAuthors,
      changePublishers,
      changeManufacturers,
      changeMinPrice,
      changeMaxPrice,
    )
      .then((response: AnyResponse<string>) => {
        response.status
          ? setTotalCount(Number(response.data))
          : console.error(`Error ${response.code}: Failed to fetch products`);
      })
      .catch((error) => console.error('Network error:', error));
    //загрузка информации о продуктах
    getInfoProductsList(requestType, Number(id) || 0, isStock, changeBindings, changeMinPrice, changeMaxPrice)
      .then((response: AnyResponse<ProductDTO[]>) => {
        response.status
          ? setInfoProducts(response.data)
          : console.error(`Error ${response.code}: Failed to fetch products`);
      })
      .catch((error) => console.error('Network error:', error));
  }, [
    limit,
    currentPage,
    sort,
    isStock,
    changeBindings,
    changeBadges,
    changeAuthors,
    changePublishers,
    changeManufacturers,
    changeMinPrice,
    changeMaxPrice,
    id,
  ]);

  useEffect(() => {
    //разрешение на видимость блока отсувствия товаров, при первичной загрузке
    {
      products.length > 0 && dispatchFilter(setVisibleNoFilterAction(true));
    }
    //видимость кнопок страниц
    {
      products.length > 0
        ? dispatchFilter(setVisiblePagesAction(true))
        : dispatchFilter(setVisiblePagesAction(false));
    }
  }, [products]);

  useMemo(() => {
    //бэйджи
    const badgesNovelty: FilterType[] = [];
    const badgeDiscount: FilterType[] = [];
    const badgeSalesLeader: FilterType[] = [];
    const authors: FilterType[] = [];
    const publishers: FilterType[] = [];
    const manufacturers: FilterType[] = [];
    const bindings: FilterType[] = [];
    infoProducts.map((product: Product) => {
      //бэйджи
      if (product.badgeNovelty) {
        {
          !badgesNovelty[0]
            ? badgesNovelty.push({ id: 0, name: 'Новинка', count: 1 })
            : (badgesNovelty[0].count += 1);
        }
      }
      if (product.badgeDiscount) {
        {
          !badgeDiscount[0]
            ? badgeDiscount.push({ id: 1, name: 'Скидка', count: 1 })
            : (badgeDiscount[0].count += 1);
        }
      }
      if (product.badgeSalesLeader) {
        {
          !badgeSalesLeader[0]
            ? badgeSalesLeader.push({ id: 2, name: 'Лидер продаж', count: 1 })
            : (badgeSalesLeader[0].count += 1);
        }
      }
      //авторы
      if (product.authorId) {
        const availableAuthor = authors.findIndex((item) => item.id === product.authorId);
        let surname = '';
        if (product.authorSurname) {
          surname = ' ' + product.authorSurname;
        }
        {
          availableAuthor === -1
            ? authors.push({ id: product.authorId, name: product.authorName + surname, count: 1 })
            : (authors[availableAuthor].count += 1);
        }
      }
      //издательства
      if (product.publisherId) {
        const availablePublisher = publishers.findIndex((item) => item.id === product.publisherId);
        {
          availablePublisher === -1
            ? publishers.push({ id: product.publisherId, name: product.publisher || '', count: 1 })
            : (publishers[availablePublisher].count += 1);
        }
      }
      //производители
      if (product.manufacturerId) {
        const availableManufacturer = manufacturers.findIndex((item) => item.id === product.manufacturerId);
        {
          availableManufacturer === -1
            ? manufacturers.push({ id: product.manufacturerId, name: product.manufacturer || '', count: 1 })
            : (manufacturers[availableManufacturer].count += 1);
        }
      }
      //переплёт
      if (product.bindingId) {
        const availableBinding = bindings.findIndex((item) => item.id === product.bindingId);
        {
          availableBinding === -1
            ? bindings.push({ id: product.bindingId, name: product.binding || '', count: 1 })
            : (bindings[availableBinding].count += 1);
        }
      }
    });
    const finalBadges = badgesNovelty.concat(badgeDiscount, badgeSalesLeader);
    //console.log(badgeDiscount)
    finalBadges.sort((a, b) => b.count - a.count);
    dispatchFilter(setBadgesAction(finalBadges));

    authors.sort((a, b) => b.count - a.count);
    dispatchFilter(setAuthorsAction(authors));

    publishers.sort((a, b) => b.count - a.count);
    dispatchFilter(setPublishersAction(publishers));

    manufacturers.sort((a, b) => b.count - a.count);
    dispatchFilter(setManufacturersAction(manufacturers));

    bindings.sort((a, b) => b.count - a.count);
    dispatchFilter(setBindingsAction(bindings));
  }, [infoProducts]);

  function resetFilters() {
    dispatchFilter(setResetFilterAction());
  }

  return (
    <>
      {products.length > 0 ? (
        <div className={styles.gridPlate}>
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      ) : (
        <div className={styles.plate404}>
          {visibleNoFilter && (
            <div>
              <p className={styles.title404}>{'Ой'}</p>
              <p className={styles.titleDesc}>
                {'Кажется, что под ваши критерии в фильтрах у нас товаров нет'}
              </p>
              <p className={styles.titleDescMin}>
                {'Сбросте фильтры, или уберите последнии изменения в них'}
              </p>
              <div className={styles.buttonPlate}>
                <HighPaddingButton onClick={resetFilters}>Сбросить фильтры</HighPaddingButton>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductPlate;
