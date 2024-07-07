import React from 'react';

import styles from './bonusProgramText.module.scss';

import BonusProgramExchange from '../bonusProgramExchange/BonusProgramExchange';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';

import { HandySvg } from 'handy-svg';
import noCardSvg from '../../../../../assets/svg/no-card.svg';
import ShoppingCartSvg from '../../../../../assets/svg/shopping-cart.svg';
import PostSvg from '../../../../../assets/svg/mail.svg';

const BonusProgramText: React.FC = () => {
  return (
    <>
      <SingleTitle>Бонусная программа</SingleTitle>
      <div className={styles.descPlate}>
        <h4 className={styles.descText}>
          Мы предлагаем бонусную программу для наших клиентов, которая позволяет накапливать бонусные баллы за
          каждую покупку и использовать их для получения скидок или оплаты товаров. Участники программы также
          имеют доступ к эксклюзивным акциям и специальным предложениям. Присоединяйтесь к нашей программе и
          получайте больше преимуществ и удовольствия от покупок в нашем магазине!
        </h4>
        <BonusProgramExchange />
      </div>

      <div className={styles.visiblePlate}>
        <div className={styles.visibleTitleBlock}>
          <h2 className={styles.viewTitle}>Это выгодно!</h2>
        </div>
        <div className={styles.visibleSvgBlock}>
          <HandySvg src={noCardSvg} className={styles.viewSvg} />
          <h4 className={styles.visibleSvgBlockText1}>Носить с собой пластиковую карту больше не нужно</h4>
        </div>
        <div className={styles.visibleSvgBlock}>
          <HandySvg src={ShoppingCartSvg} className={styles.viewSvg} />
          <h4 className={styles.visibleSvgBlockText2}>
            Можно оплачивать до 100% от суммы чека в интернет-магазине
          </h4>
        </div>
        <div className={styles.visibleSvgBlock}>
          <HandySvg src={PostSvg} className={styles.viewSvg} />
          <h4 className={styles.visibleSvgBlockText3}>
            Мы вам подарим 100 бонусов в день ваш день рождения{' '}
          </h4>
        </div>
      </div>

      <h4 className={styles.bottomText}>
        В связи с тем, что в магазине товар продаётся в 3 валютах на выбор, модель получения бонусов зависит
        от валюты и определяется по курсу: 1 балл за 10 центов, все изменения курса баллов формируются на
        основе курса доллара.
      </h4>
    </>
  );
};

export default BonusProgramText;
