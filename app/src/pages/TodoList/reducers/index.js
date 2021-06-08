import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  listTask: [],
};

const tasksManagerReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, { payload }) => {
      const listTaskCopy = [...state.listTask];
      listTaskCopy.push({ textValue: payload });
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
  },
  defaultState
);

export default tasksManagerReducer;
