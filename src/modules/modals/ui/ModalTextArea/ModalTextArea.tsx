import React, { TextareaHTMLAttributes } from 'react';
import styles from './modalTextArea.module.scss';

interface ModalTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height: number;
}

const ModalTextArea: React.FC<ModalTextAreaProps> = ({ height, ...props }) => {
  return <textarea {...props} className={styles.base} style={{ height: `${height}px` }} />;
};

export default ModalTextArea;
