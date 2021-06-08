import { combineReducers } from "redux";

import tasksManager from "../pages/TodoList/reducers";

const rootReducer = combineReducers({ tasksManager });

export default rootReducer;
