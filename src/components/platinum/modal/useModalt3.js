import { useState } from 'react';

const useModalt3 = () => {
  const [isShowingt3, setIsShowingt3] = useState(false);

  function togglet3() {
    setIsShowingt3(!isShowingt3);
  }

  return {
    isShowingt3,
    togglet3,
  }
};

export default useModalt3;