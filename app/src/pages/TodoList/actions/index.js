import { createAction, createActions } from "redux-actions";

export const CREATE_TASK = createAction("CREATE_TASK");
export const REMOVE_ALL_TASK = createAction("REMOVE_ALL_TASK");
export const REMOVE_ONE_TASK = createAction("REMOVE_ONE_TASK");
export const CORRECT_ONE_TASK = createAction("CORRECT_ONE_TASK");
export const SAVE_TASK = createAction("SAVE_TASK");
export const GET_TASKS = createAction("GET_TASKS");
