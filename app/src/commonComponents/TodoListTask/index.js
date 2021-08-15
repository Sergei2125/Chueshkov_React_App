import React from "react";

const TodoListTask = ({ removeOneTask, textValue, correctOneTask }) => {
  const Btn = {
    padding: "5px",
    backgroundColor: "yellow",
    borderRadius: "7px",
    margin: "5px",
  };
  const Content = {
    padding: "6px",
  };
  return (
    <li>
      <span style={Content}>{textValue}</span>

      <button onClick={removeOneTask} style={Btn}>
        Удалить
      </button>
      <button onClick={correctOneTask} style={Btn}>
        Исправить
      </button>
    </li>
  );
};

export default TodoListTask;
