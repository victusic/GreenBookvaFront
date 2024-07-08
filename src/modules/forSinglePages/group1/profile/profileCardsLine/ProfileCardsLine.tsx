import React from 'react';

import styles from './profileCardsLine.module.scss';

import AddCard from '../../../../../ui/cards/addCard/AddCard';

import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';
import {
  refreshModalAddCartAction,
  refreshCheckCodeAction,
  refreshModalViewCartAction,
} from '../../../../../store/modalVisibleReducer';
import { refreshProfileCardAction } from '../../../../../store/profileReducer';
import { Card } from '../../../../../ui/cards/card/Card';
import { HorizontalScroll } from '../../../../../ui/horizontalScroll/HorisontalScroll';
import { RootState } from '../../../../../store';

const ProfileCardsLine: React.FC = () => {
  const dispatchModalVisible = useDispatch();
  const dispatchProfile = useDispatch();

  const cards = useSelector((state: RootState) => state.profile.cardsList);

  function getCard(id) {
    const realCheck = Cookies.get('realCheck');
    if (realCheck) {
      dispatchProfile(refreshProfileCardAction(id));
      dispatchModalVisible(refreshModalViewCartAction(true));
    } else {
      dispatchModalVisible(refreshCheckCodeAction(true));
    }
  }

  function addCard() {
    const realCheck = Cookies.get('realCheck');
    {
      realCheck
        ? dispatchModalVisible(refreshModalAddCartAction(true))
        : dispatchModalVisible(refreshCheckCodeAction(true));
    }
  }

  return (
    <>
      <h3 className={styles.cardTitle}>Сохранённые карты:</h3>

      <HorizontalScroll>
        {cards.map((card) => (
          <Card
            number={card.code}
            date={card.monthYear}
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
