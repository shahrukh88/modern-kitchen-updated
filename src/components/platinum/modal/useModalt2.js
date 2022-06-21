import { useState } from 'react';

const useModalt2 = () => {
  const [isShowingt2, setIsShowingt2] = useState(false);

  function togglet2() {
    setIsShowingt2(!isShowingt2);
  }

  return {
    isShowingt2,
    togglet2,
  }
};

export default useModalt2;