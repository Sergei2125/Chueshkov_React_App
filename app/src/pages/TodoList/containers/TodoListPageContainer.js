import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState, useEffect } from "react";
import {
  CORRECT_ONE_TASK,
  CREATE_TASK,
  SAVE_TASK,
  GET_TASKS,
} from "../actions";
import { REMOVE_ALL_TASK } from "../actions";
import { REMOVE_ONE_TASK } from "../actions";

import TodoListLayout from "../components/TodoListLayout";
import { element } from "prop-types";

const TodoListPageContainer = () => {
  const [textValue, setTextValue] = useState("");
  const [textValueCorrect, setTextValueCorrect] = useState("");

  let { listTask } = useSelector((state) => state.tasksManager);

  const dispatch = useDispatch();

  const handleTaskCreate = useCallback(
    (event) => {
      const { value } = event.target;
      setTextValue(value);
    },
    [textValue]
  );

  const handleTaskCorrectForm = useCallback(
    (event) => {
      const { value } = event.target;
      setTextValueCorrect(value);
    },
    [textValueCorrect]
  );

  useEffect(() => {
    const OurSaveTask = Object.fromEntries(Object.entries(localStorage).sort());
    const tasks = [];
    for (const [key, value] of Object.entries(OurSaveTask)) {
      tasks.push(value);
    }
    listTask = tasks.map((elem) => ({
      textValue: elem,
      isCorrect: false,
    }));
    dispatch(GET_TASKS(listTask));
  }, []);
  const saveNewTask = useCallback(
    (index) => {
      dispatch(SAVE_TASK({ index, textValueCorrect }));
    },
    [textValueCorrect, listTask]
  );

  const addTaskToList = useCallback(() => {
    textValue !== "" && dispatch(CREATE_TASK(textValue));
    localStorage.setItem(listTask.length, textValue);

    console.log(localStorage);
    setTextValue("");
  }, [textValue]);

  const correctOneTask = useCallback(
    (index) => {
      dispatch(CORRECT_ONE_TASK(index));
      setTextValueCorrect(textValue);
      console.log(textValueCorrect);
    },
    [dispatch, textValueCorrect]
  );
  const removeAllTask = useCallback(() => {
    dispatch(REMOVE_ALL_TASK(textValue));
    localStorage.clear();
  }, [textValue]);

  const removeOneTask = useCallback(
    (index) => {
      dispatch(REMOVE_ONE_TASK(index));
      localStorage.removeItem(index);
      console.log(localStorage);
    },
    [dispatch]
  );

  return (
    <TodoListLayout
      handleTaskCreate={handleTaskCreate}
      handleTaskCorrectForm={handleTaskCorrectForm}
      textValue={textValue}
      textValueCorrect={textValueCorrect}
      addTaskToList={addTaskToList}
      saveNewTask={saveNewTask}
      removeAllTask={removeAllTask}
      listTask={listTask}
      removeOneTask={removeOneTask}
      correctOneTask={correctOneTask}
    />
  );
};

export default TodoListPageContainer;
