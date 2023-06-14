import React from 'react';
import styles from './Button.module.css';
import { UserContext } from '../UserContext';
const Button = ({ children, value }) => {
  const context = React.useContext(UserContext);
  const active = context.statebtn === value ? 'active' : null;

  return (
    <button
      aria-label={value}
      value={value}
      onClick={context.BtnFilter}
      className={`${
        context.darkmode ? styles.buttonDarkmode : styles.buttonLightmode
      } ${active ? styles.active : null}`}
    >
      {children}
    </button>
  );
};

export default Button;
