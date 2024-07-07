import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { fetchAddCard, fetchProfileCardsList } from '../../../actions/storeActions/profile';
import styleForModal from '../ui/ModalSelectStyle/modalSelectStyle.module.scss';
import { cleanShoppingCart, getCard, getOrders, patchPoints } from '../../../actions/requestActions/profile';
import ModalCard from '../ui/ModalCard/ModalCard';
import Checkbox from '../../../ui/checkbox/Checkbox';
import ModalButton from '../ui/ModalButton/ModalButton';
import { newProductCount, sendOrder } from '../../../actions/requestActions/order';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { Card } from '../../../ui/cards/card/Card';
import { Select } from '../../../ui/select/Select';
import { RootState } from '../../../store';
import { AnyAction } from 'redux';

const ModalPay: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalPayVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [cardsMap, setCardsMap] = useState<{ name: string; value: string }[]>([]);

  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleWarningDate, setVisibleWarningDate] = useState(false);
  const [visibleWarningCVV, setVisibleWarningCVV] = useState(false);

  const [nowCardId, setNowCardId] = useState('');
  const [nowCard, setNowCard] = useState({ number: '0000000000000000', date: '0000' });

  const [saveCard, setSaveCard] = useState(false);

  const [isNewCard, setIsNewCard] = useState(false);

  const [cardCode, setCardCode] = useState('');
  const [cardMonthYear, setCardMonthYear] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const dispatchProfile = useDispatch();

  const profileId = useSelector((state: RootState) => state.profile.id);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  useEffect(() => {
    if (profileId) {
      dispatchProfile(fetchProfileCardsList(profileId) as unknown as AnyAction);
    }
  }, [profileId]);

  useEffect(() => {
    if (nowCardId) {
      setIsNewCard(false);
      {
        nowCardId !== 'new'
          ? getCard(Number(nowCardId)).then((data) =>
              setNowCard({ number: data[0].code, date: data[0].monthYear }),
            )
          : setIsNewCard(true);
      }
    }
  }, [nowCardId]);

  const cards = useSelector((state: RootState) => state.profile.cardsList);

  useEffect(() => {
    const cardsArr: { name: string; value: string }[] = [];
    cards.forEach((card) => {
      cardsArr.push({
        name: `Карта, заканчивающая на номер: ${card.code.slice(-4)}`,
        value: String(card.id),
      });
    });
    cardsArr.push({ name: `Новая карта`, value: 'new' });
    setCardsMap(cardsArr);
    if (cards.length > 0) {
      setNowCard({ number: cards[0].code, date: cards[0].monthYear });
      setIsNewCard(false);
    } else {
      setIsNewCard(true);
    }
  }, [cards]);

  const [orderCode, serOrderCode] = useState(0);

  const shopProducts = useSelector((state: RootState) => state.profile.shopProducts);

  const cardId = useSelector((state: RootState) => state.profile.card);

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
      if (cardMonthYear.length !== 4) {
        setVisibleWarningDate(true);
        return;
      }
    }
    if (cardCVV.length !== 3) {
      setVisibleWarningCVV(true);
      return;
    }
    getOrders(Number(profileId)).then((data) => addorderCode(data));
    {
      saveCard &&
        dispatchProfile(fetchAddCard(cardId, cardCode, cardMonthYear, profileId) as unknown as AnyAction);
    }
  }

  const points = useSelector((state: RootState) => state.profile.newPoints);

  useEffect(() => {
    if (orderCode) {
      const date = new Date().toISOString();
      shopProducts.forEach((product) => {
        sendOrder(product, Number(profileId), date, orderCode);
        newProductCount(product);
      });
      patchPoints(Number(profileId), Number(points));
      cleanShoppingCart(Number(profileId));
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
              setCardMonthYear={setCardMonthYear}
              number={cardCode}
              date={cardMonthYear}
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
