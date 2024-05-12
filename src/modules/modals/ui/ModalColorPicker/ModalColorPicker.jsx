import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';

import styles from './modalColorPicker.module.scss';

const ModalColorPicker = ({ visible, ...props }) => {
  const [visiblePicker, setVisiblePicker] = useState('');

  useEffect(() => {
    {
      visible ? setVisiblePicker('') : setVisiblePicker(styles.pickerBaseNone);
    }
  }, [visible]);

  return (
    <div className={styles.pickerBase + ' ' + visiblePicker}>
      <ChromePicker
        disableAlpha={true}
        displayChromePicker={false}
        onClick={(e) => e.preventDefault()}
        {...props}
      />
    </div>
  );
};

export default ModalColorPicker;
