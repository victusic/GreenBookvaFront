import React from 'react';
import styles from './loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderBase}>
      <div className={styles.loader}>
        <div className={styles.book}>
          <div className={styles.inner}>
            <div className={styles.left}></div>
            <div className={styles.middle}></div>
            <div className={styles.right}></div>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loader;
