import React from "react";
import Counter from "../../../../commonComponents/Counter";

const AddCounterPageLayout = ({
  counterData,
  addCounterClick,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCloseCounter,
  handleRemoveAllCounter,
  sumOfValueOfAllCounter,
  numberOfCounter,
}) => {
  return (
    <div>
      <button onClick={addCounterClick}>Add Counter!!!</button>
      <button onClick={handleRemoveAllCounter}>RemoveAllCounter</button>
      <div>Сумма значений всех счетчиков: {sumOfValueOfAllCounter}</div>
      <div>Количество счетчиков: {numberOfCounter}</div>
      <div>
        {counterData.map((element, index) => {
          return (
            <div key={index}>
              <Counter
                countValue={element.countValue}
                handleIncrement={() => handleIncrement(index)}
                handleDecrement={() => handleDecrement(index)}
                handleReset={() => handleReset(index)}
                handleCloseCounter={() => handleCloseCounter(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddCounterPageLayout;
