import { useState } from 'react';

const useModal5 = () => {
  const [isShowing5, setIsShowing5] = useState(false);

  function toggle5() {
    setIsShowing5(!isShowing5);
  }

  return {
    isShowing5,
    toggle5,
  }
};

export default useModal5;