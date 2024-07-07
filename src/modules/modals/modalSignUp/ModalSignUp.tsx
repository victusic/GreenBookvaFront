import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalInput from '../ui/ModalInput/ModalInput';
import ModalReturn from '../ui/ModalReturn/ModalReturn';
import ModalInInput from '../ui/ModalInInput/ModalInInput';
import Checkbox from '../../../ui/checkbox/Checkbox';
import {
  refreshModalSIgnUpFihishVisibleAction,
  refreshModalSIgnUpVisibleAction,
  refreshModalSIgnVisibleAction,
} from '../../../store/modalVisibleReducer';
import { refreshSignStateAction } from '../../../store/signReducer';
import { fetchSignUp } from '../../../actions/storeActions/sign';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import Form from '../ui/Form/Form';
import { RootState } from '../../../store';
import { AnyAction } from 'redux';

const ModalSignUp: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalSignUpVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const [visibleWarningName, setVisibleWarningName] = useState(false);
  const [visibleWarningSurname, setVisibleWarningSurname] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const mail = useSelector((state: RootState) => state.sign.mail);

  const dispatchModalVisible = useDispatch();
  const dispatchSign = useDispatch();

  function returnModal() {
    dispatchModalVisible(refreshModalSIgnVisibleAction(true));
    dispatchModalVisible(refreshModalSIgnUpVisibleAction(false));
    dispatchSign(refreshSignStateAction(''));
  }

  function SignUp(e) {
    e.preventDefault();
    setVisibleWarningName(false);
    setVisibleWarningSurname(false);
    let warng = 0;
    if (name.length < 2 || name.length > 14) {
      setVisibleWarningName(true);
      warng = 1;
    }
    if (surname.length < 2 || surname.length > 14) {
      setVisibleWarningSurname(true);
      warng = 1;
    }
    if (warng < 1) {
      dispatchSign(fetchSignUp(name, surname, mail) as unknown as AnyAction);
      dispatchModalVisible(refreshModalSIgnUpVisibleAction(false));
      dispatchModalVisible(refreshModalSIgnUpFihishVisibleAction(true));
    }
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <Form onSubmit={SignUp}>
          <ModalTitle>Регистрация</ModalTitle>
          <ModalReturn onClick={returnModal}>❮ Указать другой адрес почты</ModalReturn>

          <ModalInInput>Имя</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningName}>
            Длина имени может составлять от 2 до 14 символов
          </ModalWarning>
          <ModalInput
            type="text"
            value={name}
            placeholder={'Например: Виктор'}
            onChange={(e) => setName(e.target.value)}
          />

          <ModalInInput>Фамилия</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningSurname}>
            Длина фамилии может составлять от 2 до 14 символов
          </ModalWarning>
          <ModalInput
            type="text"
            value={surname}
            placeholder={'Например: Хорошилов'}
            onChange={(e) => setSurname(e.target.value)}
          />

          <Checkbox>Хочу получать уведомления об акциях</Checkbox>
          <ModalButton>Зарегистрироваться</ModalButton>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalSignUp;
