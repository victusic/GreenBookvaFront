import React, { useEffect, useState } from 'react';
import styles from './findInput.module.scss';
import { HandySvg } from 'handy-svg';
import DarkButton from '../../../../ui/buttons/darkButton/DarkButton';
import magnifierSvg from '../../../../assets/svg/magnifier.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const FindInput = ({ visible, setVisible, oldFinds, setOldFinds }) => {
  const route = useNavigate();

  const { findString } = useParams();

  const [findStringInput, setFindStringInput] = useState();

  useEffect(() => {
    setFindStringInput(findString);
  }, [findString]);

  function navigate() {
    if (findStringInput) {
      route(`/find/${findStringInput}`);
      setVisible(styles.visibleNone);
      let newArr = oldFinds.slice();
      console.log(newArr);
      if (newArr.length > 4) {
        newArr.splice(0, 1);
      }
      newArr.push(findStringInput);
      setOldFinds(newArr);
      Cookies.set('oldFinds', JSON.stringify(newArr), { expires: 90 });
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate();
    } else if (event.key === 'Escape') {
      setFindStringInput('');
    }
  };

  return (
    <div className={styles.findPlate}>
      <input
        type="text"
        placeholder="Хочу почитать..."
        value={findStringInput}
        onClick={() => {
          visible ? setVisible('') : setVisible(styles.visibleNone);
        }}
        onChange={(e) => setFindStringInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className={styles.input}
      ></input>
      <div className={styles.inputButton}>
        <DarkButton onClick={navigate}>
          <HandySvg src={magnifierSvg} className={styles.magnifierSvg} />
        </DarkButton>
      </div>
    </div>
  );
};

export default FindInput;
