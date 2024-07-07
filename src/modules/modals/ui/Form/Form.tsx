import React, { FormHTMLAttributes, ReactNode } from 'react';

import styles from './form.module.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;
