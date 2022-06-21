import { useState } from 'react';

const useModals2 = () => {
  const [isShowings2, setIsShowings2] = useState(false);

  function toggles2() {
    setIsShowings2(!isShowings2);
  }

  return {
    isShowings2,
    toggles2,
  }
};

export default useModals2;