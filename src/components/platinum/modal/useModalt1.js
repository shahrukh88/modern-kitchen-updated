import { useState } from 'react';

const useModalt1 = () => {
  const [isShowingt1, setIsShowingt1] = useState(false);

  function togglet1() {
    setIsShowingt1(!isShowingt1);
  }

  return {
    isShowingt1,
    togglet1,
  }
};

export default useModalt1;