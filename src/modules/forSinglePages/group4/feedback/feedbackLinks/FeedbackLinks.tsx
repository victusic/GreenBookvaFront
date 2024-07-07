import React from 'react';

import styles from './feedbackLinks.module.scss';
import FeedbackData from '../feedbackData/FeedbackData';

import telegramImg from '../../../../../assets/img/telegram.png';
import gitImg from '../../../../../assets/img/git.png';
import linkedImg from '../../../../../assets/img/linkedIn.png';
import docImg from '../../../../../assets/img/doc.png';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';

const FeedbackLinks: React.FC = () => {
  //ссылки
  const tgLink = useSelector((state: RootState) => state.externalLinks.telegram);
  const gitLink = useSelector((state: RootState) => state.externalLinks.github);
  const linkedLink = useSelector((state: RootState) => state.externalLinks.linkedIn);
  const synopsisLink = useSelector((state: RootState) => state.externalLinks.synopsis);

  return (
    <div className={styles.minHeight}>
      <SingleTitle>Обратная связь</SingleTitle>
      <h4 className={styles.feedbackDescription}>Для связи с разработчиком данного проекта есть каналы:</h4>
      <div className={styles.callPlate}>
        <div className={styles.linkCardPlate}>
          <Link to={tgLink} target="_blank" className={styles.linkCard}>
            <img src={telegramImg} className={styles.linkCardImage} alt="Telegram" />
            <h4 className={styles.linkCardText}>Telegram</h4>
          </Link>
          <Link to={gitLink} target="_blank" className={styles.linkCard}>
            <img src={gitImg} className={styles.linkCardImage} alt="Git Hub" />
            <h4 className={styles.linkCardText}>Git Hub</h4>
          </Link>
          <Link to={linkedLink} target="_blank" className={styles.linkCard}>
            <img src={linkedImg} className={styles.linkCardImage} alt="Linked In" />
            <h4 className={styles.linkCardText}>Linked In</h4>
          </Link>
          <Link to={synopsisLink} target="_blank" className={styles.linkCard}>
            <img src={docImg} className={styles.linkCardImage} alt="Резюме" />
            <h4 className={styles.linkCardText}>Резюме</h4>
          </Link>
          <FeedbackData />
        </div>
      </div>
    </div>
  );
};

export default FeedbackLinks;
