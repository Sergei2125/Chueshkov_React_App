import React from "react";
import Counter from "../../../../commonComponents/Counter";

const AddCounterPageLayout = ({
  counterData,
  addCounterClick,
  handleIncrement,
}) => {
  return (
    <div>
      <button onClick={addCounterClick}>Add Counter!!!</button>
      <div>
        {counterData.map((element, index) => {
          return (
            <div key={index}>
              <Counter
                countValue={element.countValue}
                handleIncrement={() => handleIncrement(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddCounterPageLayout;
