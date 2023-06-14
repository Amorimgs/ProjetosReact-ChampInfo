import React from 'react';
import styles from './Capa.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hoocks/useFetch';

const Capa = () => {
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
      <div className={styles.container}>
        <img
          className={styles.splashart}
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`}
          alt=""
        />
        <div className={styles.name}>
          <h1>{info.name}</h1>
          <span>{info.title}</span>
        </div>
      </div>
    );
  }
};

export default Capa;
