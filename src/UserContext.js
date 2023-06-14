import React from 'react';
import useFetch from './Hoocks/useFetch';
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const { data, request } = useFetch();
  const [value, setValue] = React.useState('');
  const [dataChamp, setDataChamp] = React.useState([]);
  const [statebtn, setStatebtn] = React.useState('');
  const [darkmode, setDarkmode] = React.useState(false);

  React.useEffect(() => {
    request(
      'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion.json',
    );
  }, []);

  React.useEffect(() => {
    if (data) {
      setDataChamp(Object.values(data.data));
    }
  }, [data]);

  function reseta() {
    if (data) {
      setDataChamp(Object.values(data.data));
    }
  }

  if (data) {
    const valueClean = value.toLowerCase().trim().replace(' ', '');

    const champTela = dataChamp.filter((item) => {
      if (item.name.toLowerCase().includes(valueClean)) return item;
    });

    function BtnFilter(e) {
      setStatebtn(e.currentTarget.value);
      const atributo = e.currentTarget.value;

      if (e.currentTarget.value === 'all') reseta();
      else
        setDataChamp(() => {
          const newList = Object.values(data.data).filter((item) => {
            if (item.tags.includes(atributo)) return item;
          });

          return newList;
        });
    }

    return (
      <UserContext.Provider
        value={{
          value,
          setValue,
          champTela,
          BtnFilter,
          statebtn,
          darkmode,
          setDarkmode,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  } else return null;
};
