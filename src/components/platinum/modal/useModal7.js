import { useState } from 'react';

const useModal7 = () => {
  const [isShowing7, setIsShowing7] = useState(false);

  function toggle7() {
    setIsShowing7(!isShowing7);
  }

  return {
    isShowing7,
    toggle7,
  }
};

export default useModal7;