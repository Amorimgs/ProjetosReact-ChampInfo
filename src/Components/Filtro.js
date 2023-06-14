import React from 'react';
import Button from './Button';
import styles from './Filtro.module.css';
import useMedia from '../Hoocks/useMedia';
import { UserContext } from '../UserContext';
import { ReactComponent as LightTodos } from '../assets/light/globo.svg';
import { ReactComponent as LightAssassinos } from '../assets/light/ASSASSINO.svg';
import { ReactComponent as LightLutadores } from '../assets/light/LUTADOR.svg';
import { ReactComponent as LightMagos } from '../assets/light/MAGE.svg';
import { ReactComponent as LightAtiradores } from '../assets/light/ATIRADOR.svg';
import { ReactComponent as LightSuportes } from '../assets/light/SUPORTE.svg';
import { ReactComponent as LightTanques } from '../assets/light/TANK.svg';

import { ReactComponent as DarkTodos } from '../assets/dark/globo.svg';
import { ReactComponent as DarkAssassinos } from '../assets/dark/ASSASSINO.svg';
import { ReactComponent as DarkLutadores } from '../assets/dark/LUTADOR.svg';
import { ReactComponent as DarkMagos } from '../assets/dark/MAGE.svg';
import { ReactComponent as DarkAtiradores } from '../assets/dark/ATIRADOR.svg';
import { ReactComponent as DarkSuportes } from '../assets/dark/SUPORTE.svg';
import { ReactComponent as DarkTanques } from '../assets/dark/TANK.svg';

const Filtro = () => {
  const context = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 760px)');

  const classes = [
    {
      nome: 'todos',
      classe: 'all',
      icons: context.darkmode ? <DarkTodos /> : <LightTodos />,
    },
    {
      nome: 'assassinos',
      classe: 'Assassin',
      icons: context.darkmode ? <DarkAssassinos /> : <LightAssassinos />,
    },
    {
      nome: 'lutadores',
      classe: 'Fighter',
      icons: context.darkmode ? <DarkLutadores /> : <LightLutadores />,
    },
    {
      nome: 'magos',
      classe: 'Mage',
      icons: context.darkmode ? <DarkMagos /> : <LightMagos />,
    },
    {
      nome: 'atiradores',
      classe: 'Marksman',
      icons: context.darkmode ? <DarkAtiradores /> : <LightAtiradores />,
    },
    {
      nome: 'suportes',
      classe: 'Support',
      icons: context.darkmode ? <DarkSuportes /> : <LightSuportes />,
    },
    {
      nome: 'tanques',
      classe: 'Tank',
      icons: context.darkmode ? <DarkTanques /> : <LightTanques />,
    },
  ];

  return (
    <div className={styles.filtro}>
      {classes.map((item) => (
        <Button value={item.classe} key={item.nome}>
          {mobile ? item.icons : item.nome}
        </Button>
      ))}
    </div>
  );
};

export default Filtro;
