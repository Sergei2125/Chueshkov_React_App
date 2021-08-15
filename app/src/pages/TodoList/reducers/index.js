import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  listTask: [],
};

const tasksManagerReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, { payload }) => {
      const listTaskCopy = [...state.listTask];
      listTaskCopy.push({ textValue: payload, isCorrect: false });
      return {
        ...state,
        listTask: listTaskCopy,
      };
    },
    [actions.CORRECT_ONE_TASK]: (state, { payload }) => {
      const listTaskCopy = [...state.listTask];
      listTaskCopy[payload].isCorrect = true;
      return {
        ...state,
        listTask: listTaskCopy,
      };
    },
    [actions.SAVE_TASK]: (state, { payload }) => {
      const listTaskCopy = [...state.listTask];
      listTaskCopy[payload.index].isCorrect = false;
      listTaskCopy[payload.index].textValue = payload.textValueCorrect;
      return {
        ...state,
        listTask: listTaskCopy,
      };
    },
    [actions.REMOVE_ALL_TASK]: (state, action) => {
      return {
        listTask: [],
      };
    },
    [actions.REMOVE_ONE_TASK]: (state, { payload }) => {
      const listTaskCopy = [...state.listTask];
      listTaskCopy.splice(payload, 1);
      return {
        ...state,
        listTask: listTaskCopy,
      };
    },
    [actions.GET_TASKS]: (state, { payload }) => {
      return {
        listTask: payload,
      };
    },
  },
  defaultState
);

export default tasksManagerReducer;
