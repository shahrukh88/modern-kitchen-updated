import { useState } from 'react';

const useModal1 = () => {
  const [isShowing1, setIsShowing1] = useState(false);

  function toggle1() {
    setIsShowing1(!isShowing1);
  }

  return {
    isShowing1,
    toggle1,
  }
};

export default useModal1;