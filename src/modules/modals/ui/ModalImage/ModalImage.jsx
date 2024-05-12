import React, { useRef } from 'react';
import styles from './modalImage.module.scss';
import NoAvatar from '../../../../assets/img/no-avatar.png';

const ModalImage = ({ image, alt, ...props }) => {
  const imagePicker = useRef(null);

  function changeImage() {
    imagePicker.current.click();
  }

  return (
    <div className={styles.imagePad}>
      <input
        type="file"
        ref={imagePicker}
        className={styles.imageForm}
        accept=".png, .jpg, .jpeg, .gif, .webp"
        {...props}
      />
      <div className={styles.imageBlockPad}>
        {image ? (
          <img src={image} alt={alt} className={styles.modalImg}></img>
        ) : (
          <img src={NoAvatar} alt={'Фотография профиля отсутствует'} className={styles.modalImg}></img>
        )}
        <div className={styles.changeImage} onClick={changeImage}>
          Загрузить изображение
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
