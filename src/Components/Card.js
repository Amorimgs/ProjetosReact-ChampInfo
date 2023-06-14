import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
const Card = ({ name, src }) => {
  const [active, setActive] = React.useState(false);

  return (
    <Link
      to={`champion/${src}`}
      onMouseEnter={() => {
        setActive(!active);
      }}
      onMouseLeave={() => {
        setActive(!active);
      }}
      className={styles.card}
    >
      <img
        className={active ? styles.ativo : null}
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${src}_0.jpg`}
        alt=""
      />
      <p className={active ? styles.ativo : null}>{name}</p>
    </Link>
  );
};

export default Card;
