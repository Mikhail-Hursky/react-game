import { Action } from "../interfaces/interfaces";
import { SettingInterface } from "../interfaces/SettingInterface";
import {
  HIDE_SETTING,
  RED_SHIRT,
  SET_QUANTITY_CARD,
  SET_SHIRT_CARD,
  SHOW_SETTING,
} from "../types";

const initialState: SettingInterface =
  localStorage.getItem("SETTING") === null
    ? {
        quantityCard: 52,
        shirtColor: RED_SHIRT,
        isOpen: false,
      }
    : //@ts-ignore
      JSON.parse(localStorage.getItem("SETTING"));

export const settingReducer = (
  state: SettingInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case SHOW_SETTING:
      state = { ...state, isOpen: true };
      break;
    case HIDE_SETTING:
      state = { ...state, isOpen: false };
      break;
    case SET_QUANTITY_CARD:
      state = { ...state, quantityCard: action.payload };
      break;
    case SET_SHIRT_CARD:
      state = { ...state, shirtColor: action.payload };
      break;
  }
  localStorage.setItem("SETTING", JSON.stringify(state));
  return state
};
