import React from 'react';
import Cards from './Cards';
import Input from './Forms/Input';
import Filtro from './Filtro';
import styles from './Main.module.css';
import { UserContext } from '../UserContext';
const Main = () => {
  const context = React.useContext(UserContext);
  return (
    <div
      className={context.darkmode ? styles.MainDarkmode : styles.MainLightmode}
    >
      <Input />
      <Filtro />
      <Cards />
    </div>
  );
};

export default Main;
