import { useState } from 'react';

const useModalg1 = () => {
  const [isShowingg1, setIsShowingg1] = useState(false);

  function toggleg1() {
    setIsShowingg1(!isShowingg1);
  }

  return {
    isShowingg1,
    toggleg1,
  }
};

export default useModalg1;