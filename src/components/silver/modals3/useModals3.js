import { useState } from 'react';

const useModals3 = () => {
  const [isShowings3, setIsShowings3] = useState(false);

  function toggles3() {
    setIsShowings3(!isShowings3);
  }

  return {
    isShowings3,
    toggles3,
  }
};

export default useModals3;