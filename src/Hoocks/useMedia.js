import React from 'react';

const useMedia = (media) => {
  const [metch, setMetch] = React.useState(false);

  React.useEffect(() => {
    function changeMeches() {
      const { matches } = window.matchMedia(media);
      setMetch(matches);
    }
    window.addEventListener('resize', changeMeches);
    return () => {
      window.removeEventListener('resize', changeMeches);
    };
  }, [media]);
  return metch;
};

export default useMedia;
