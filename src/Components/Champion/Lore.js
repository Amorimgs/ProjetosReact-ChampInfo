import React from 'react';
import styles from './Lore.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hoocks/useFetch';

const Lore = () => {
  const { data, request } = useFetch();
  const params = useParams();

  React.useEffect(() => {
    request(
      `https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${params.name}.json`,
    );
  }, []);

  if (data) {
    const info = data.data[params.name];

    return (
      <div className={styles.lore}>
        <h2 className={styles.loreTitulo}>Lore</h2>
        <p className={styles.loreDescricao}>{info.lore}</p>
      </div>
    );
  }
};

export default Lore;
