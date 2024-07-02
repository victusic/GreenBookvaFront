import React from 'react';

import styles from './profileCardsLine.module.scss';

import AddCard from '../../../../../ui/cards/addCard/AddCard';

import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';
import {
  refreshAddCartAction,
  refreshCheckCodeAction,
  refreshModalViewCartAction,
} from '../../../../../store/modalVisibleReducer';
import { refreshProfileCardAction } from '../../../../../store/profileReducer';
import { Card } from '../../../../../ui/cards/card/Card';
import { HorizontalScroll } from '../../../../../ui/horizontalScroll/HorisontalScroll';

const ProfileCardsLine = () => {
  const dispathModalVisible = useDispatch();
  const dispathProfile = useDispatch();

  const cards = useSelector((state) => state.profile.cardsList);

  function getCard(id) {
    const realCheck = Cookies.get('realCheck');
    if (realCheck) {
      dispathProfile(refreshProfileCardAction(id));
      dispathModalVisible(refreshModalViewCartAction(true));
    } else {
      dispathModalVisible(refreshCheckCodeAction(true));
    }
  }

  function addCard() {
    const realCheck = Cookies.get('realCheck');
    {
      realCheck
        ? dispathModalVisible(refreshAddCartAction(true))
        : dispathModalVisible(refreshCheckCodeAction(true));
    }
  }

  return (
    <>
      <h3 className={styles.cardTitle}>Сохранённые карты:</h3>

      <HorizontalScroll>
        {cards.map((card) => (
          <Card
            number={card.code}
            date={card.monthyear}
            margin={true}
            key={card.id}
            onClick={() => getCard(card.id)}
          />
        ))}
        <AddCard onClick={addCard} />
      </HorizontalScroll>
    </>
  );
};

export default ProfileCardsLine;
