import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { settingReducer } from "./settingReducer";
import { userReducer } from "./userReducer";
import { computerReducer } from "./computerReducer";
import { tableReducer } from "./tableReduser";

export const rootReducer = combineReducers({
  game: gameReducer,
  setting: settingReducer,
  user: userReducer,
  computer: computerReducer,
  table:tableReducer,
});
