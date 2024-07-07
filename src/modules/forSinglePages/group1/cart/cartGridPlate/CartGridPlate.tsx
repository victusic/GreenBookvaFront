import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import styles from './cartGridPlate.module.scss';
import CartPlate from '../cartPlate/CartPlate';
import { useDispatch, useSelector } from 'react-redux';
import { refreshDelShoppingCart, refreshShopProductsAction } from '../../../../../store/profileReducer';
import { RootState } from '../../../../../store';
import { Product } from '../../../../../utils/types';

interface CartGridPlateProps {
  products: Product[];
  setFirstPriceProducts: Dispatch<SetStateAction<number>>;
  setDiscountPriceProducts: Dispatch<SetStateAction<number>>;
  firstPriceProducts: number;
  discountPriceProducts: number;
}

const CartGridPlate: React.FC<CartGridPlateProps> = ({
  products,
  setFirstPriceProducts,
  setDiscountPriceProducts,
  firstPriceProducts,
  discountPriceProducts,
}) => {
  //сортировка товаров

  const [manyProducts, setManyProducts] = useState<Product[]>([]);
  const [noProducts, setNoProducts] = useState<Product[]>([]);

  const dispatchProfile = useDispatch();

  const [finalProducts, setFinalProducts] = useState(products);

  const delShoppingCart = useSelector((state: RootState) => state.profile.delShoppingCart);

  useEffect(() => {
    if (delShoppingCart) {
      setFinalProducts(finalProducts.filter((product) => product.id !== Number(delShoppingCart)));
      dispatchProfile(refreshDelShoppingCart(''));
    }
  }, [delShoppingCart]);

  useEffect(() => {
    const newManyProducts: Product[] = [];
    const newNoProducts: Product[] = [];

    let firstPrice = 0;
    let discountPrice = 0;

    const shopProducts: number[] = [];

    finalProducts.forEach((product) => {
      if (product.count > 0) {
        newManyProducts.push(product);
        firstPrice += Number(product.price);
        if (product.discount) {
          discountPrice += (product.discount * Number(product.price)) / 100;
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
