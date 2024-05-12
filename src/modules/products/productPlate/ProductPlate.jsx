import React, { useMemo } from 'react';
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

const ProductPlate = ({ setTotalCount, limit, currentPage, sort, requestType }) => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  const [infoProducts, setInfoProducts] = useState([]);

  const isStock = useSelector((state) => state.filter.isStock);
  const changeBindings = useSelector((state) => state.filter.changeBindings);
  const changeBadges = useSelector((state) => state.filter.changeBadges);
  const changeAuthors = useSelector((state) => state.filter.changeAuthors);
  const changePublishers = useSelector((state) => state.filter.changePublishers);
  const changeManufacturers = useSelector((state) => state.filter.changeManufacturers);
  const changeMinPrice = useSelector((state) => state.filter.changeMinPrice);
  const changeMaxPrice = useSelector((state) => state.filter.changeMaxPrice);

  const visibleNoFilter = useSelector((state) => state.filter.visibleNoFilter);

  const dispatchFilter = useDispatch();

  useMemo(() => {
    //загрузка данных
    getProductsList(
      requestType,
      id,
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
    ).then((data) => {
      setProducts(data);
    });
    //загрузка кол-ва товаров
    getCountProductsList(
      requestType,
      id,
      isStock,
      changeBindings,
      changeBadges,
      changeAuthors,
      changePublishers,
      changeManufacturers,
      changeMinPrice,
      changeMaxPrice,
    ).then((data) => {
      setTotalCount(data);
    });
    //загрузка информации о продуктах
    getInfoProductsList(requestType, id, isStock, changeBindings, changeMinPrice, changeMaxPrice).then(
      (data) => {
        setInfoProducts(data);
      },
    );
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
    let badgesNovelty = [];
    let badgeDiscount = [];
    let badgeSalesLeader = [];
    let autors = [];
    let publishers = [];
    let manufacturers = [];
    let bindings = [];
    infoProducts.forEach((product) => {
      //бэйджи
      if (product.badge_novelty) {
        {
          !badgesNovelty[0]
            ? badgesNovelty.push({ id: 0, name: 'Новинка', count: 1 })
            : (badgesNovelty[0].count += 1);
        }
      }
      if (product.badge_discount) {
        {
          !badgeDiscount[0]
            ? badgeDiscount.push({ id: 1, name: 'Скидка', count: 1 })
            : (badgeDiscount[0].count += 1);
        }
      }
      if (product.badge_sales_leder) {
        {
          !badgeSalesLeader[0]
            ? badgeSalesLeader.push({ id: 2, name: 'Лидер продаж', count: 1 })
            : (badgeSalesLeader[0].count += 1);
        }
      }
      //авторы
      if (product.autor_id) {
        const availableAutor = autors.findIndex((item) => item.id === product.autor_id);
        let surname = '';
        if (product.autor_surname) {
          surname = ' ' + product.autor_surname;
        }
        {
          availableAutor === -1
            ? autors.push({ id: product.autor_id, name: product.autor_name + surname, count: 1 })
            : (autors[availableAutor].count += 1);
        }
      }
      //издательства
      if (product.publisher_id) {
        const availablePublisher = publishers.findIndex((item) => item.id === product.publisher_id);
        {
          availablePublisher === -1
            ? publishers.push({ id: product.publisher_id, name: product.publisher, count: 1 })
            : (publishers[availablePublisher].count += 1);
        }
      }
      //производители
      if (product.manufacturer_id) {
        const availableManufacturer = manufacturers.findIndex((item) => item.id === product.manufacturer_id);
        {
          availableManufacturer === -1
            ? manufacturers.push({ id: product.manufacturer_id, name: product.manufacturer, count: 1 })
            : (manufacturers[availableManufacturer].count += 1);
        }
      }
      //переплёт
      if (product.binding_id) {
        const availableBinding = bindings.findIndex((item) => item.id === product.binding_id);
        {
          availableBinding === -1
            ? bindings.push({ id: product.binding_id, name: product.binding, count: 1 })
            : (bindings[availableBinding].count += 1);
        }
      }
    });
    const finalBadges = badgesNovelty.concat(badgeDiscount, badgeSalesLeader);
    //console.log(badgeDiscount)
    finalBadges.sort((a, b) => b.count - a.count);
    dispatchFilter(setBadgesAction(finalBadges));

    autors.sort((a, b) => b.count - a.count);
    dispatchFilter(setAuthorsAction(autors));

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
