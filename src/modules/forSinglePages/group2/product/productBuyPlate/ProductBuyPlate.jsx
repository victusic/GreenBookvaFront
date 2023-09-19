import React from 'react'

import styles from './productBuyPlate.module.scss'
import BigButton from '../../../../../ui/buttons/bigButton/BigButton'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import BigButtonTrue from '../../../../../ui/buttons/bigButtonTrue/BigButtonTrue';
import BigButtonFalse from '../../../../../ui/buttons/bigButtonFalse/BigButtonFalse';
import { addFavorites, addShoppingCart, delFavorites, delShoppingCart } from '../../../../../actions/requestActions/profile';
import Cookies from 'js-cookie';
import { addProfileFavoriteFromListAction, addProfileShoppingCartFromListAction, delProfileFavoriteFromListAction, delProfileShoppingCartFromListAction, refreshDelFavorite, refreshProfileFavoritesMinusAction, refreshProfileFavoritesPlusAction, refreshProfileShoppingCartMinusAction, refreshProfileShoppingCartPlusAction } from '../../../../../store/profileReducer';
import FavoritesBigButton from '../../../../../ui/buttons/favoritesBigButton/FavoritesBigButton';
import FavoritesBigButtonTrue from '../../../../../ui/buttons/favoritesBigButtonTrue/FavoritesBigButtonTrue';
import { useCurrent } from '../../../../../hooks/useCurrent';
import { useTextCount } from '../../../../../hooks/useTextCount';
import { refreshModalSIgnVisibleAction } from '../../../../../store/modalVisibleReducer';

const ProductBuyPlate = ({product}) => {

    const [finalBasePrice, setFinalBasePrice] = useState(0);
    const [disountPrice, setDisountPrice] = useState(0);

    //Стоимость товара

    const current = useSelector(state => state.current.currentType);

    const [pointForOrder, setPoitsForOrder] = useState();
    const [productPointsTitle, setProductPointsTitle] = useState('');

    const dispatchProfile = useDispatch();
    const dispatchModalVisible = useDispatch();

    const [cartTrue, isCartTrue] = useState(false);

    const [favoriteTrue, isFavoriteTrue] = useState(false);

    const favoritesList = useSelector(state => state.profile.favoritesList);

    const cartList = useSelector(state => state.profile.shopping_cartList);

    useEffect(()=>{
      isCartTrue(false)
      isFavoriteTrue(false)
        if(cartList){
        cartList.forEach(element => {
            {element.id === product.id && isCartTrue(true)}
        });
        }
        if(favoritesList){
          favoritesList.forEach(element => {
              {element.id === product.id && isFavoriteTrue(true)}
          });
        }
        
    }, [cartList, favoritesList, product])
    

    const countTitle = useTextCount('балл', pointForOrder);
    useEffect(()=>{
      setProductPointsTitle(countTitle);
    }, [productPointsTitle])

    //стоимость

    let price = product.price;
    let discountPrice = 0;
    let pointFromOrder = Math.ceil(price);

    if(product.discount){
        discountPrice = (100 - product.discount) * price / 100;
        pointFromOrder = Math.ceil(discountPrice);
    }

    price = useCurrent(price);
    discountPrice = useCurrent(discountPrice);

    useEffect(()=>{
        setFinalBasePrice(price)
        setPoitsForOrder(pointFromOrder)
        setDisountPrice(discountPrice)
    }, [product, current])

    const id = Cookies.get('profileId');

    function addFavorite(){
      if(id){
        addFavorites(product.id, id);
        dispatchProfile(addProfileFavoriteFromListAction(product.id))
        dispatchProfile(refreshProfileFavoritesPlusAction())
        isFavoriteTrue(true);
      }
      else{
        dispatchModalVisible(refreshModalSIgnVisibleAction(true))
      }
    }
  
    function delFavorite(){
      delFavorites(product.id, id);
      dispatchProfile(delProfileFavoriteFromListAction(product.id))
      dispatchProfile(refreshDelFavorite(product.id))
      dispatchProfile(refreshProfileFavoritesMinusAction())
      isFavoriteTrue(false);
    }
  
    function addCart(){
      if(id){
        addShoppingCart(product.id, id);
        dispatchProfile(addProfileShoppingCartFromListAction(product.id))
        dispatchProfile(refreshProfileShoppingCartPlusAction())
        isCartTrue(true);
      }
      else{
        dispatchModalVisible(refreshModalSIgnVisibleAction(true))
      }
    }
  
    function delCart(){
      delShoppingCart(product.id, id);
      dispatchProfile(delProfileShoppingCartFromListAction(product.id))
      dispatchProfile(refreshProfileShoppingCartMinusAction())
      isCartTrue(false);
    }

  return (
    <div className={styles.productBuyPlate}>
        <div className={styles.flexBetween}>
            <div className={styles.flex}>
                <h2 className={styles.productPrice}>{product.discount ? disountPrice : finalBasePrice}</h2>
                {product.discount && <h4 className={styles.discountPriceTop}>{finalBasePrice}</h4>}
            </div>
            
            <div className={styles.productPoints}><h4 className={styles.productPrice}>{`+ ${pointForOrder} ${productPointsTitle}`}</h4></div>
        </div>
        <div className={styles.tabletFlex}>
          <div className={styles.flexBetweenButton}>
              {cartTrue ? <BigButtonTrue onClick={delCart}>В корзине</BigButtonTrue> : <>{!product.count ? <BigButtonFalse>Нет в наличии</BigButtonFalse> :<BigButton onClick={addCart}>Купить</BigButton>}</>}
              {product.count > 0 && <>{favoriteTrue ? <div className={styles.favorite}><FavoritesBigButtonTrue onClick={delFavorite}/></div> : <div className={styles.favorite}><FavoritesBigButton onClick={addFavorite}/></div>}</>}
          </div>
          {product.count > 0 && <h3 className={styles.productCount}>{`В наличии: ${product.count}`}</h3>}
          <p className={styles.productDisclaimer}>Цена на сайте может отличаться от цены в магазинах сети. Внешний вид книги может отличаться от изображения на сайте.</p>
        </div>
        {product.count > 0 && <h3 className={styles.productCountMobile}>{`В наличии: ${product.count}`}</h3>}
    </div>
  )
}

export default ProductBuyPlate
