import React from "react";
import { useState, useCallback, useMemo } from "react";
import AddCounterPageLayout from "../components/AddCounterPageLayout";

const AddCounterPagecontainers = () => {
  const [counterData, setCounterData] = useState([]);

  const handleIncrement = useCallback(
    (index) => {
      const stateCopy = [...counterData];

      const foundItem = stateCopy[index];

      foundItem.countValue = foundItem.countValue + 1;

      setCounterData(stateCopy);
    },
    [counterData]
  );

  const handleDecrement = useCallback(
    (index) => {
      if (counterData[index].countValue > 0) {
        const stateCopy = [...counterData];

        const foundItem = stateCopy[index];

        foundItem.countValue = foundItem.countValue - 1;

        setCounterData(stateCopy);
      }
    },
    [counterData]
  );

  const handleReset = useCallback(
    (index) => {
      const stateCopy = counterData.map((elem, num) => {
        if (num === index) {
          return { countValue: 0 };
        } else return elem;
      });
      console.log(stateCopy);
      setCounterData(stateCopy);
    },
    [counterData]
  );

  const sumOfValueOfAllCounter = useMemo(() => {
    const sumArray = counterData.reduce((sum, elem) => {
      return (sum = sum + elem.countValue);
    }, 0);
    console.log(sumArray);
    return sumArray;
  }, [counterData]);

  const numberOfCounter = counterData.length;

  const handleCloseCounter = useCallback(
    (index) => {
      const stateCopy = [...counterData];
      stateCopy.splice(index, 1);
      const newArrray = stateCopy.map((elem) => {
        if (elem.countValue % 2 !== 0) {
          return { countValue: elem.countValue - 1 };
        } else return elem;
      });
      setCounterData(newArrray);
    },
    [counterData]
  );

  const addCountertoPage = useCallback(() => {
    const stateCopy = counterData.map((elem) => {
      if (elem.countValue % 2 === 0) {
        return { countValue: elem.countValue + 1 };
      } else return elem;
    });
    const value = {
      countValue: 0,
    };
    stateCopy.push(value);
    setCounterData(stateCopy);
  }, [counterData]);

  const handleRemoveAllCounter = useCallback(() => {
    setCounterData([]);
  }, []);
  return (
    <AddCounterPageLayout
      counterData={counterData}
      addCounterClick={addCountertoPage}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleCloseCounter={handleCloseCounter}
      handleRemoveAllCounter={handleRemoveAllCounter}
      sumOfValueOfAllCounter={sumOfValueOfAllCounter}
      numberOfCounter={numberOfCounter}
    />
  );
};

export default AddCounterPagecontainers;
