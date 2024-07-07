import React, { useEffect, useState } from 'react';
import { ChromePicker, ChromePickerProps } from 'react-color';

import styles from './modalColorPicker.module.scss';

interface ModalColorPickerProps extends ChromePickerProps {
  visible: boolean;
}

const ModalColorPicker: React.FC<ModalColorPickerProps> = ({ visible, ...props }) => {
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
        //displayChromePicker={false}
        //onClick={(e) => e.preventDefault()}
        {...props}
      />
    </div>
  );
};

export default ModalColorPicker;
