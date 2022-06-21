import { useState } from 'react';

const useModal6 = () => {
  const [isShowing6, setIsShowing6] = useState(false);

  function toggle6() {
    setIsShowing6(!isShowing6);
  }

  return {
    isShowing6,
    toggle6,
  }
};

export default useModal6;