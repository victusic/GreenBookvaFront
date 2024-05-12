import React from 'react';

import styles from './aboutTopText.module.scss';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';

import reactImg from '../../../../../assets/img/react.png';
import reduxImg from '../../../../../assets/img/redux.png';
import scssImg from '../../../../../assets/img/ScssSass.png';
import nodeImg from '../../../../../assets/img/node.png';
import postgreImg from '../../../../../assets/img/postgree.png';
import mongoImg from '../../../../../assets/img/mongo.png';

function AboutTopText() {
  return (
    <>
      <SingleTitle>О проекте</SingleTitle>
      <h4 className={styles.aboutDescription}>
        Данный проект был разработан в качестве демонстрации навыков, и представляет из себя полноценнцю
        имитацию онлайн магазина по продаже книг.
        <br />
        <br />В проекте Использовались React/Redax, Scss, а для back-end части Node Js совместно с PostgreSQL
        и MongoDB
      </h4>
      <div className={styles.imgPlate}>
        <img src={reactImg} className={styles.imgTechnology} alt="React" />
        <img src={reduxImg} className={styles.imgTechnology} alt="Redux" />
        <img src={scssImg} className={styles.imgTechnology} alt="Sass/Scss" />
        <img src={nodeImg} className={styles.imgTechnology} alt="Node JS" />
        <img src={postgreImg} className={styles.imgTechnology} alt="PostgreSQL" />
        <img src={mongoImg} className={styles.imgTechnology} alt="MongoDb" />
      </div>
    </>
  );
}

export default AboutTopText;
