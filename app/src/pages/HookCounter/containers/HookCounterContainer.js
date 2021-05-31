import { useState, useEffect, useCallback } from "react";

import Counter from "../../../commonComponents/Counter";

const HookCounterContainer = () => {
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = useCallback(() => {
    setCountValue(countValue + 1);
  }, [countValue]);

  const handleDecrement = useCallback(() => {
    if (countValue > 0) {
      setCountValue(countValue - 1);
    }
  }, [countValue]);

  const handleReset = useCallback(() => {
    setCountValue(0);
  }, [countValue]);

  useEffect(() => {
    console.log("Hello");
  }, [countValue]);
  return (
    <Counter
      countValue={countValue}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default HookCounterContainer;
