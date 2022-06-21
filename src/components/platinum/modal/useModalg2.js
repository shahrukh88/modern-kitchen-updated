import { useState } from 'react';

const useModalg2 = () => {
  const [isShowingg2, setIsShowingg2] = useState(false);

  function toggleg2() {
    setIsShowingg2(!isShowingg2);
  }

  return {
    isShowingg2,
    toggleg2,
  }
};

export default useModalg2;