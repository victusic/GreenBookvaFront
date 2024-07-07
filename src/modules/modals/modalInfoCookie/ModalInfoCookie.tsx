import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';

import { useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { RootState } from '../../../store';

const ModalInfoCookie: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalCookieInfoVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Использование Cookie файлов</ModalTitle>
        <ModalDescription>
          Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookie (пользовательских
          данных, содержащих сведения о местоположении; версию ОС; тип и разрешение экрана устройства, с
          которого пользователь обращается к сайту; сведения о взаимодействии пользователя с web-интерфейсом).
          Если вы не хотите, чтобы ваши данные обрабатывались, пожалуйста, покиньте сайт.
        </ModalDescription>
      </Modal>
    </div>
  );
};

export default ModalInfoCookie;
