import React from "react";
import TodoListTask from "../../../../commonComponents/TodoListTask";
import TodoListTaskCorrect from "../../../../commonComponents/TodoListTaskCorrect";

import styles from "./styles.module.scss";

const TodoListLayout = ({
  handleTaskCreate,
  textValue,
  addTaskToList,
  removeAllTask,
  listTask,
  removeOneTask,
  correctOneTask,
  handleTaskCorrectForm,
  saveNewTask,
  textValueCorrect,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableflex}>
        <h2 className={styles.header}>TodoList</h2>
        <form>
          <p>Введите задачу:</p>
          <input type="text" value={textValue} onChange={handleTaskCreate} />
        </form>
        <button onClick={addTaskToList} className={styles.btn}>
          Добавить задачу
        </button>
        <button onClick={removeAllTask} className={styles.btn}>
          Удалить все
        </button>
      </div>
      <div className={styles.tableflex}>
        <h2 className={styles.header}>Задачи:</h2>
        <ol>
          {listTask.map((element, index) => {
            if (element.isCorrect === false) {
              return (
                <TodoListTask
                  key={index}
                  correctOneTask={() => correctOneTask(index)}
                  removeOneTask={() => removeOneTask(index)}
                  textValue={element.textValue}
                />
              );
            } else
              return (
                <TodoListTaskCorrect
                  key={index}
                  textValueCorrect={element.textValueCorrect}
                  handleTaskCorrectForm={handleTaskCorrectForm}
                  saveNewTask={() => saveNewTask(index)}
                />
              );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoListLayout;
