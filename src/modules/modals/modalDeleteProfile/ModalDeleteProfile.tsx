import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { fetchDeleteProfile } from '../../../actions/storeActions/profile';
import Cookies from 'js-cookie';
import { RootState } from '../../../store';
import { AnyAction } from 'redux';

const ModalDeleteProfile: React.FC = () => {
  const dispatchProfile = useDispatch();
  const profileId = useSelector((state: RootState) => state.profile.id);

  const visible = useSelector((state: RootState) => state.modalVisible.modalDeleteProfileVisible);

  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  function deleteProfile() {
    dispatchProfile(fetchDeleteProfile(profileId) as unknown as AnyAction);
    Cookies.remove('profileId');
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Удаление профиля</ModalTitle>
        <ModalDescription>
          Вы действительно хотите удалить ваш профиль? После этого действия его воостановить будет невозможно
        </ModalDescription>
        <ModalButton onClick={deleteProfile}>Удалить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalDeleteProfile;
