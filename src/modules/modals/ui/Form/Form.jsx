import React from 'react';

import styles from './form.module.scss';

const Form = ({ children, ...props }) => {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;
