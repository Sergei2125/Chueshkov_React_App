import React from "react";
import { useState, useCallback, useEffect } from "react";
import AddCounterPageLayout from "../components/AddCounterPageLayout";

const AddCounterPagecontainers = () => {
  const [counterData, setCounterData] = useState([]);
  const [countValue, setcountValue] = useState(0);

  const handleIncrement = useCallback(
    (index) => {
      const stateCopy = [...counterData];
      console.log(stateCopy);
      console.log(index);
      const newArray = stateCopy.map((elem, num) => {
        if (num === index) {
          return { countValue: countValue + 1 };
        } else return elem;
      });
      console.log(newArray);
      setCounterData(newArray);
      //setcountValue(countValue);
    },
    [counterData]
  );

  const addCountertoPage = useCallback(() => {
    const stateCopy = [...counterData];
    const value = {
      countValue: 0,
    };
    console.log("123");
    stateCopy.push(value);
    setCounterData(stateCopy);
  }, [counterData]);
  return (
    <AddCounterPageLayout
      counterData={counterData}
      addCounterClick={addCountertoPage}
      handleIncrement={handleIncrement}
    />
  );
};

export default AddCounterPagecontainers;
