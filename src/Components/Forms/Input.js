import React from 'react';
import styles from './Input.module.css';
import { UserContext } from '../../UserContext';
const Input = () => {
  const context = React.useContext(UserContext);

  return (
    <>
      <input
        onChange={(e) => {
          context.setValue(e.target.value);
        }}
        className={
          context.darkmode ? styles.inputDarkmode : styles.inputLightmode
        }
        type="text"
        name=""
        id=""
        value={context.value}
        placeholder="DIGITE O NOME DO CAMPEÃO"
      />
    </>
  );
};

export default Input;
