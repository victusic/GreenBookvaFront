import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import stylesLocal from './modalUpdateProfile.module.scss';

import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';
import ModalTitle from '../ui/ModalTitle/ModalTitle';

import styles from '../modalNone.module.scss';
import ModalInInput from '../ui/ModalInInput/ModalInInput';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import ModalInput from '../ui/ModalInput/ModalInput';
import ModalImage from '../ui/ModalImage/ModalImage';
import moment from 'moment';

import colorSvg from '../../../assets/svg/spiral.svg';
import calendarSvg from '../../../assets/svg/calendar.svg';
import { HandySvg } from 'handy-svg';
import ModalColorPicker from '../ui/ModalColorPicker/ModalColorPicker';
import ModalCalendar from '../ui/ModalCalendar/ModalCalendar';
import { fetchRefreshProfile } from '../../../actions/storeActions/profile';
import Form from '../ui/Form/Form';
import { RootState } from '../../../store';
import { AnyAction } from 'redux';

const ModalUpdateProfile: React.FC = () => {
  const avatarRoute = useSelector((state: RootState) => state.imagesRoutes.avatar);

  const visible = useSelector((state: RootState) => state.modalVisible.modalUpdateProfileVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const profileId = useSelector((state: RootState) => state.profile.id);

  const Sname = useSelector((state: RootState) => state.profile.name);
  const sSurname = useSelector((state: RootState) => state.profile.surname);
  const sColor = useSelector((state: RootState) => state.profile.color);
  const sImage = useSelector((state: RootState) => state.profile.image);
  const SBirthday = useSelector((state: RootState) => state.profile.birthday);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [Fbirthday, setFBirthday] = useState('');
  const [image, setImage] = useState('');
  const [color, setColor] = useState('');

  const [uploadImage, setuploadImage] = useState(false);

  const [visibleColorPicker, setVisibleColorPicker] = useState(false);
  const [visibleCalendar, setVisibleCalendar] = useState(false);

  const dispathProfile = useDispatch();

  useEffect(() => {
    setName(Sname);
    setSurname(sSurname);
    setColor(sColor);
    setBirthday(SBirthday);
    if (sImage) {
      {
        sImage.length < 26 ? setImage(avatarRoute + sImage) : setImage(sImage);
      }
    }
    const formattedDate = moment(SBirthday).format('DD.MM.YYYY');
    setFBirthday(formattedDate);
  }, [visibleModal]);

  useEffect(() => {
    const formattedDate = moment(birthday).format('DD.MM.YYYY');
    setFBirthday(formattedDate);
  }, [birthday]);

  const [visibleWarningName, setVisibleWarningName] = useState(false);
  const [visibleWarningSurname, setVisibleWarningSurname] = useState(false);
  const [visibleWarningImage, setVisibleWarningImage] = useState(false);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const imageChange = (e) => {
    setVisibleWarningImage(false);
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      // Проверка на размер файла
      const maxFileSize = 5 * 1024 * 1024; // 5 мб
      if (file.size > maxFileSize) {
        setVisibleWarningImage(true);
        return;
      }
      reader.readAsDataURL(file);
    }

    reader.onloadend = function () {
      setImage(String(reader.result !== null ? reader.result : ''));
      setuploadImage(true);
    };
  };

  const onColorPickerChange = (color) => {
    setColor(color.hex);
  };

  function visiblePicker() {
    setVisibleColorPicker(!visibleColorPicker);
    setVisibleCalendar(false);
  }

  function visibleCalendarQ() {
    setVisibleCalendar(!visibleCalendar);
    setVisibleColorPicker(false);
  }

  function updateProfile(e) {
    e.preventDefault();
    setVisibleWarningName(false);
    setVisibleWarningSurname(false);
    setVisibleWarningImage(false);
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
      const formattedBirthday = moment(birthday).format('YYYY-MM-DD');
      {
        uploadImage
          ? dispathProfile(
              fetchRefreshProfile(
                profileId,
                name,
                surname,
                color,
                image,
                formattedBirthday,
              ) as unknown as AnyAction,
            )
          : dispathProfile(
              fetchRefreshProfile(
                profileId,
                name,
                surname,
                color,
                null,
                formattedBirthday,
              ) as unknown as AnyAction,
            );
      }
    }

    //window.location.reload();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, no-unused-vars
  const onSetBirthday = (value: any, event: any) => {
    setBirthday(value);
  };

  return (
    <div className={visibleModal}>
      <Modal>
        <Form onSubmit={updateProfile}>
          <ModalTitle>Редактировать профиль</ModalTitle>

          <ModalWarning visibleWarning={visibleWarningImage}>
            Размер изображения не должен превышать 5 мб
          </ModalWarning>
          <ModalImage image={image} alt={name} onChange={imageChange} />

          <ModalInInput>Имя</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningName}>
            Длина имени может составлять от 2 до 14 символов
          </ModalWarning>
          <div className={stylesLocal.svgPlate}>
            <ModalInput
              type="text"
              placeholder="Виктор"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ color: color }}
            />
            <p onClick={visiblePicker}>
              <HandySvg src={colorSvg} className={stylesLocal.inputSvg} />
            </p>
          </div>

          <ModalInInput>Фамилия</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningSurname}>
            Длина имени может составлять от 2 до 14 символов
          </ModalWarning>

          <ModalInput
            type="text"
            placeholder="Хорошилов"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <ModalInInput>Дата рождения</ModalInInput>

          <div className={stylesLocal.svgPlate}>
            <ModalInput type="text" placeholder="24.09.2002" value={Fbirthday} />
            <p onClick={visibleCalendarQ}>
              <HandySvg src={calendarSvg} className={stylesLocal.inputSvg} />
            </p>
          </div>

          <ModalColorPicker onChange={onColorPickerChange} color={color} visible={visibleColorPicker} />
          <ModalCalendar onChange={onSetBirthday} value={birthday} visible={visibleCalendar} />

          <ModalButton>Сохранить</ModalButton>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalUpdateProfile;
