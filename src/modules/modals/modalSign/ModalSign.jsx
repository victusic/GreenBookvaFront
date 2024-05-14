import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import ModalInput from '../ui/ModalInput/ModalInput';

import { refreshMailAction } from '../../../store/signReducer';
import { fetchSignGetCode } from '../../../actions/storeActions/sign';
import { refreshModalSIgnCodeVisibleAction } from '../../../store/modalVisibleReducer';
import { refreshModalSIgnVisibleAction } from '../../../store/modalVisibleReducer';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import Form from '../ui/Form/Form';

const ModalSign = () => {
  const visible = useSelector((state) => state.modalVisible.modalSignVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [visibleWarning, setVisibleWarning] = useState(false);

  const dispatchSign = useDispatch();
  const dispatchModalVisible = useDispatch();

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const [mail, setMail] = useState('');

  function getSign(e) {
    e.preventDefault();
    setVisibleWarning(false);
    if (mail.indexOf('@') === -1 || mail.indexOf('.') === -1 || mail.indexOf(' ') !== -1) {
      setVisibleWarning(true);
    } else {
      dispatchSign(refreshMailAction(mail));
      dispatchSign(fetchSignGetCode(mail));
      dispatchModalVisible(refreshModalSIgnVisibleAction(false));
      dispatchModalVisible(refreshModalSIgnCodeVisibleAction(true));
    }
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <Form onSubmit={getSign}>
          <ModalTitle>Вход и регистрация</ModalTitle>
          <ModalDescription>
            Чтобы войти или зарегистрироваться, укажите свой адрес электронной почты:
          </ModalDescription>
          <ModalWarning visibleWarning={visibleWarning}>
            Убедитесь, в правильности ввода адреса почты
          </ModalWarning>

          <ModalInput
            type="email"
            name="email"
            placeholder="Адрес почты"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <ModalButton>Получить код</ModalButton>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalSign;
