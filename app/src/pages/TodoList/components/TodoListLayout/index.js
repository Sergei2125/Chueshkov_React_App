import React from "react";

import styles from "./styles.module.scss";

const TodoListLayout = ({
  handleTaskCreate,
  textValue,
  addTaskToList,
  removeAllTask,
  listTask,
  removeOneTask,
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
          Сохранить
        </button>
        <button onClick={removeAllTask} className={styles.btn}>
          Удалить все
        </button>
      </div>
      <div className={styles.tableflex}>
        <h2 className={styles.header}>Задачи:</h2>
        <ul>
          {listTask.map((element, index) => {
            return (
              <li key={index}>
                {element.textValue}
                <button
                  onClick={() => removeOneTask(index)}
                  className={styles.btn}
                >
                  Удалить
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoListLayout;
