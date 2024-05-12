import React, { useState, useEffect } from 'react';

import styles from './cartGridPlate.module.scss';
import CartPlate from '../cartPlate/CartPlate';
import { useDispatch, useSelector } from 'react-redux';
import { refreshDelShoppingCart, refreshShopProductsAction } from '../../../../../store/profileReducer';

const CartGridPlate = ({
  products,
  setFirstPriceProducts,
  setDiscountPriceProducts,
  firstPriceProducts,
  discountPriceProducts,
}) => {
  //сортировка товаров

  const [manyProducts, setManyProducts] = useState([]);
  const [noProducts, setNoProducts] = useState([]);

  const dispatchProfile = useDispatch();

  const [finalProducts, setFinalProducts] = useState(products);

  const delShopping_cart = useSelector((state) => state.profile.delShopping_cart);

  useEffect(() => {
    if (delShopping_cart) {
      setFinalProducts(finalProducts.filter((product) => product.id !== delShopping_cart));
      dispatchProfile(refreshDelShoppingCart(''));
    }
  }, [delShopping_cart]);

  useEffect(() => {
    const newManyProducts = [];
    const newNoProducts = [];

    let firstPrice = 0;
    let discountPrice = 0;

    let shopProducts = [];

    finalProducts.forEach((product) => {
      if (product.count > 0) {
        newManyProducts.push(product);
        firstPrice += Number(product.price);
        if (product.discount) {
          discountPrice += (product.discount * product.price) / 100;
        }
        shopProducts.push(product.id);
      } else {
        newNoProducts.push(product);
      }
    });
    setManyProducts(newManyProducts);
    setNoProducts(newNoProducts);

    setFirstPriceProducts(firstPrice);
    setDiscountPriceProducts(discountPrice);
    dispatchProfile(refreshShopProductsAction(shopProducts));
  }, [finalProducts]);

  return (
    <div className={styles.cartPlate}>
      {finalProducts.length > 0 && (
        <>
          {manyProducts.length > 0 && <h3 className={styles.countTitle}>В наличии:</h3>}
          {manyProducts.map((product, index) => (
            <CartPlate
              product={product}
              key={index}
              setFirstPriceProducts={setFirstPriceProducts}
              setDiscountPriceProducts={setDiscountPriceProducts}
              firstPriceProducts={firstPriceProducts}
              discountPriceProducts={discountPriceProducts}
            />
          ))}
          {noProducts.length > 0 && <h3 className={styles.countTitle}>В ожидании:</h3>}
          {noProducts.map((product, index) => (
            <CartPlate product={product} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartGridPlate;
