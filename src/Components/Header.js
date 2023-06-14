import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Night } from '../assets/dark.svg';
import { ReactComponent as Light } from '../assets/light.svg';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const context = React.useContext(UserContext);

  function handleClick(event) {
    context.setDarkmode(!context.darkmode);
  }

  return (
    <header
      className={
        context.darkmode ? styles.headerDarkmode : styles.headerLightmode
      }
    >
      <Link to="/">
        <Button value={'all'}>HOME</Button>
      </Link>
      <button
        className={
          context.darkmode ? styles.buttonDarkmode : styles.buttonLightmode
        }
        onClick={handleClick}
      >
        <span>
          {context.darkmode ? <Night className={styles.night} /> : null}
        </span>
        <span>
          {context.darkmode ? null : <Light className={styles.light} />}
        </span>
      </button>
    </header>
  );
};

export default Header;
