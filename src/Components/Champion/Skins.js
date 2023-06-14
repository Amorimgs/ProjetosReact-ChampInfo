import React from 'react';
import styles from './Skins.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hoocks/useFetch';
const Skins = () => {
  const { data, request } = useFetch();
  const params = useParams();
  const [srcImg, setSrcImg] = React.useState(
    `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`,
  );

  React.useEffect(() => {
    request(
      `https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${params.name}.json`,
    );
  }, []);

  if (data) {
    const skins = data.data[params.name].skins;

    function handleClick(event) {
      console.log(event.target);
      setSrcImg(event.target.getAttribute('src'));
    }

    return (
      <div className={styles.container}>
        <h2 className={styles.loreTitulo}>Skins</h2>
        <div className={styles.containerSkins}>
          {skins.map((item, index) => (
            <img
              className={
                srcImg ==
                `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_${item.num}.jpg`
                  ? styles.active
                  : null
              }
              onClick={(event) => {
                handleClick(event);
              }}
              key={index}
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_${item.num}.jpg`}
              alt=""
            />
          ))}
        </div>
        <div className={styles.splashG}>
          <img src={srcImg} alt="" />
        </div>
      </div>
    );
  }
};

export default Skins;
