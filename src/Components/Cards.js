import React from 'react';
import styles from './Cards.module.css';
import Card from './Card';

import { UserContext } from '../UserContext';

const Cards = () => {
  const context = React.useContext(UserContext);

  return (
    <div className={styles.container}>
      {context.champTela.map((i) => (
        <Card key={i.name} name={i.name} src={i.id} />
      ))}
    </div>
  );
};

export default Cards;
