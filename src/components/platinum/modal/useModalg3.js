import { useState } from 'react';

const useModalg3 = () => {
  const [isShowingg3, setIsShowingg3] = useState(false);

  function toggleg3() {
    setIsShowingg3(!isShowingg3);
  }

  return {
    isShowingg3,
    toggleg3,
  }
};

export default useModalg3;