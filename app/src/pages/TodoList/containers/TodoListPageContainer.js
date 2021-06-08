import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { CREATE_TASK } from "../actions";
import { REMOVE_ALL_TASK } from "../actions";
import { REMOVE_ONE_TASK } from "../actions";

import TodoListLayout from "../components/TodoListLayout";

const TodoListPageContainer = () => {
  const [textValue, setTextValue] = useState("");

  const handleTaskCreate = useCallback(
    (event) => {
      const { value } = event.target;
      console.log(value);
      setTextValue(value);
    },
    [textValue]
  );

  const dispatch = useDispatch();

  const addTaskToList = useCallback(() => {
    dispatch(CREATE_TASK(textValue));
    setTextValue("");
  }, [textValue]);

  const removeAllTask = useCallback(() => {
    dispatch(REMOVE_ALL_TASK(textValue));
  }, [textValue]);

  const removeOneTask = useCallback(
    (index) => {
      dispatch(REMOVE_ONE_TASK(index));
    },
    [dispatch]
  );

  const { listTask } = useSelector((state) => state.tasksManager);

  return (
    <TodoListLayout
      handleTaskCreate={handleTaskCreate}
      textValue={textValue}
      addTaskToList={addTaskToList}
      removeAllTask={removeAllTask}
      listTask={listTask}
      removeOneTask={removeOneTask}
    />
  );
};

export default TodoListPageContainer;
