import React from 'react'

import styles from './toggle.module.scss';

const Toggle = ({...props}) => {
  return (
    <>
      <input type="checkbox" id="switch" className={styles.input} {...props}/><label for="switch" className={styles.label}>Toggle</label>
    </>
  )
}

export default Toggle
