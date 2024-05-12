import React, { useEffect, useState } from 'react';

import styles from './select.module.scss';

const Select = ({ options, addStyle, ...props }) => {
  const [clickState, setClickState] = useState(false);

  const [selectStyle, setSelectStyle] = useState('');

  useEffect(() => {
    {
      clickState ? setSelectStyle(styles.flipped) : setSelectStyle('');
    }
  }, [clickState]);

  return (
    <div className={styles.selectPlate + ' ' + selectStyle + ' ' + addStyle}>
      <select className={styles.select} {...props} onClick={() => setClickState(!clickState)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
