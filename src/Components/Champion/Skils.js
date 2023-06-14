import React from 'react';
import styles from './Skils.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hoocks/useFetch';

const Skils = () => {
  const { data, request } = useFetch();
  const params = useParams();
  const [skil, setSkil] = React.useState({
    name: '',
    descricao: '',
  });

  React.useEffect(() => {
    request(
      `https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${params.name}.json`,
    );
  }, []);

  React.useEffect(() => {
    if (data) {
      const info = data.data[params.name];
      setSkil({ name: info.passive.name, descricao: info.passive.description });
    }
  }, [data]);

  if (data) {
    const info = data.data[params.name];

    function convertKey() {
      const key = info.key;
      let keynova;
      if (key.length == 1) {
        keynova = `000${key}`;
      } else if (key.length == 2) {
        keynova = `00${key}`;
      } else if (key.length == 3) {
        keynova = `0${key}`;
      } else {
        keynova = key;
      }
      return keynova;
    }
    convertKey();
    const srcs = [
      `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertKey()}/ability_${convertKey()}_Q1`,
      `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertKey()}/ability_${convertKey()}_W1`,
      `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertKey()}/ability_${convertKey()}_E1`,
      `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertKey()}/ability_${convertKey()}_R1`,
    ];
    function handleClick(e) {
      const valor = e.currentTarget.getAttribute('value');
      if (valor === 'passive') {
        setSkil({
          name: info[valor].name,
          descricao: info[valor].description,
        });
      } else {
        const valores = valor.split(' ');
        setSkil({
          name: info[valores[0]][[valores[1]]].name,
          descricao: info[valores[0]][[valores[1]]].description,
        });
      }
    }

    return (
      <div className={styles.pai}>
        <div className={styles.container}>
          <h2 className={styles.skilsTitulo}>spells</h2>
          <div className={styles.containerSecond}>
            <div className={styles.containerImgSpell}>
              <div
                className={styles.cardSpell}
                onClick={handleClick}
                value="passive"
              >
                <img
                  className={
                    skil.name == info.passive.name ? styles.ativo : null
                  }
                  src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/passive/${info.passive.image.full}`}
                  alt=""
                />
              </div>

              {info.spells.map((item, index) => {
                return (
                  <div
                    onClick={handleClick}
                    className={styles.cardSpell}
                    value={`spells ${index}`}
                    key={item.id}
                  >
                    <img
                      className={
                        skil.name == info.spells[index].name
                          ? styles.ativo
                          : null
                      }
                      src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/spell/${item.image.full}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.containerDescricao}>
              <span>{skil.name}</span>
              <p>
                {skil.descricao.replace(/<[A-Za-z0-9_ ='#!@$%&*()/]+>/g, ' ')}
              </p>
              <video
                autoPlay
                loop
                muted
                className={skil.name == info.passive.name ? styles.ativo : null}
              >
                <source
                  src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertKey()}/ability_${convertKey()}_P1.webm`}
                  type="video/webm"
                />
                <source
                  src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertKey()}/ability_${convertKey()}_P1.mp4`}
                  type="video/mp4"
                />
              </video>
              {info.spells.map((item, index) => {
                return (
                  <video
                    key={index}
                    autoPlay
                    loop
                    muted
                    className={
                      skil.name == info.spells[index].name ? styles.ativo : null
                    }
                  >
                    <source src={`${srcs[index]}.webm`} type="video/webm" />
                    <source src={`${srcs[index]}.mp4`} type="video/mp4" />
                  </video>
                );
              })}
              <div className={styles.fundo}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Skils;
