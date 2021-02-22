import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import {settingReducer} from "./settingReducer";

export const rootReducer = combineReducers({
    game: gameReducer,
    setting: settingReducer,
})
