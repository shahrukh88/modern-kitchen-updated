import { useState } from 'react';

const useModal4 = () => {
  const [isShowing4, setIsShowing4] = useState(false);

  function toggle4() {
    setIsShowing4(!isShowing4);
  }

  return {
    isShowing4,
    toggle4,
  }
};

export default useModal4;