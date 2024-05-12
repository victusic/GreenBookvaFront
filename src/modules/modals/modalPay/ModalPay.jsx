import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { fetchAddCard, fetchProfileCardsList } from '../../../actions/storeActions/profile';
import Select from '../../../ui/select/Select';
import styleForModal from '../ui/ModalSelectStyle/modalSelectStyle.module.scss';
import Card from '../../../ui/cards/card/Card';
import { cleanShoppingCart, getCard, getOrders, patchPoints } from '../../../actions/requestActions/profile';
import ModalCard from '../ui/ModalCard/ModalCard';
import Checkbox from '../../../ui/checkbox/Checkbox';
import ModalButton from '../ui/ModalButton/ModalButton';
import { newProductCount, sendOrder } from '../../../actions/requestActions/order';
import ModalWarning from '../ui/ModalWarning/ModalWarning';

const ModalPay = () => {
  const visible = useSelector((state) => state.modalVisible.modalPayVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [cardsMap, setCardsMap] = useState([]);

  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleWarningDate, setVisibleWarningDate] = useState(false);
  const [visibleWarningCVV, setVisibleWarningCVV] = useState(false);

  const [nowCardId, setNowCardId] = useState();
  const [nowCard, setNowCard] = useState({ number: '0000000000000000', date: '0000' });

  const [saveCard, setSaveCard] = useState(false);

  const [isNewCard, setIsNewCard] = useState(false);

  const [cardCode, setCardCode] = useState('');
  const [cardMonthyear, setCardMonthyear] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const dispathProfile = useDispatch();

  const profileId = useSelector((state) => state.profile.id);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  useEffect(() => {
    if (profileId) {
      dispathProfile(fetchProfileCardsList(profileId));
    }
  }, [profileId]);

  useEffect(() => {
    if (nowCardId) {
      setIsNewCard(false);
      {
        nowCardId !== 'new'
          ? getCard(nowCardId).then((data) => setNowCard({ number: data[0].code, date: data[0].monthyear }))
          : setIsNewCard(true);
      }
    }
  }, [nowCardId]);

  const cards = useSelector((state) => state.profile.cardsList);

  useEffect(() => {
    let cardsArr = [];
    cards.forEach((card) => {
      cardsArr.push({ name: `Карта, заканчивающая на номер: ${card.code.slice(-4)}`, value: card.id });
    });
    cardsArr.push({ name: `Новая карта`, value: 'new' });
    setCardsMap(cardsArr);
    if (cards.length > 0) {
      setNowCard({ number: cards[0].code, date: cards[0].monthyear });
      setIsNewCard(false);
    } else {
      setIsNewCard(true);
    }
  }, [cards]);

  const [orderCode, serOrderCode] = useState();

  const shopProducts = useSelector((state) => state.profile.shop_products);

  const cardId = useSelector((state) => state.profile.card);

  function addorderCode(data) {
    if (data.length > 0) {
      serOrderCode(data[data.length - 1].order_code + 1);
    } else {
      serOrderCode(1);
    }
  }

  function buying() {
    setVisibleWarningCode(false);
    setVisibleWarningDate(false);
    setVisibleWarningCVV(false);
    if (isNewCard) {
      if (cardCode.length !== 16) {
        setVisibleWarningCode(true);
        return;
      }
      if (cardMonthyear.length !== 4) {
        setVisibleWarningDate(true);
        return;
      }
    }
    if (cardCVV.length !== 3) {
      setVisibleWarningCVV(true);
      return;
    }
    getOrders(profileId).then((data) => addorderCode(data));
    {
      saveCard && dispathProfile(fetchAddCard(cardId, cardCode, cardMonthyear, profileId));
    }
  }

  const points = useSelector((state) => state.profile.newPoints);

  useEffect(() => {
    if (orderCode) {
      const date = new Date().toISOString();
      shopProducts.forEach((product) => {
        sendOrder(product, profileId, date, orderCode);
        newProductCount(product);
      });
      patchPoints(profileId, points);
      cleanShoppingCart(profileId);
      window.location.reload();
    }
  }, [orderCode]);

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Оплата заказа</ModalTitle>
        <ModalDescription>Выберите способ оплаты:</ModalDescription>
        <Select
          options={cardsMap}
          addStyle={styleForModal.selectModalWidth}
          onChange={(e) => setNowCardId(e.target.value)}
        />
        {isNewCard ? (
          <>
            <ModalWarning visibleWarning={visibleWarningCode}>
              Проверьте правильность номера карты
            </ModalWarning>
            <ModalWarning visibleWarning={visibleWarningDate}>
              Проверьте правильность срока действия карты
            </ModalWarning>
            <ModalWarning visibleWarning={visibleWarningCVV}>Проверьте правильность CVV кода</ModalWarning>
            <ModalCard
              setCardCode={setCardCode}
              setCardMonthyear={setCardMonthyear}
              number={cardCode}
              date={cardMonthyear}
              cvv={true}
              cardCVV={cardCVV}
              setCardCVV={setCardCVV}
            />
            <Checkbox checked={saveCard} onChange={() => setSaveCard(!saveCard)}>
              Сохранить карту в профиле
            </Checkbox>
          </>
        ) : (
          <div className={styleForModal.selectModalWidth}>
            <ModalWarning visibleWarning={visibleWarningCVV}>Проверьте правильность CVV кода</ModalWarning>
            <Card
              number={nowCard.number}
              date={nowCard.date}
              cvv={true}
              cardCVV={cardCVV}
              setCardCVV={setCardCVV}
            />
          </div>
        )}
        <ModalButton onClick={buying}>Купить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalPay;
