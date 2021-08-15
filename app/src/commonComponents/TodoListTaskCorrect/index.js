import React from "react";

import styles from "./styles.module.scss";

const TodoListTaskCorrect = ({
  textValueCorrect,
  saveNewTask,
  handleTaskCorrectForm,
}) => {
  return (
    <li>
      <form>
        <input
          type="text"
          value={textValueCorrect}
          onChange={handleTaskCorrectForm}
        />
        <button className={styles.btn} onClick={saveNewTask}>
          save
        </button>
      </form>
    </li>
  );
};

export default TodoListTaskCorrect;
