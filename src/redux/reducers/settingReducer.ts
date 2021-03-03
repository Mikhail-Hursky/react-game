import { Action } from "../interfaces/interfaces";
import { SettingInterface } from "../interfaces/SettingInterface";
import {
  HIDE_SETTING,
  RED_SHIRT,
  SET_QUANTITY_CARD,
  SET_SHIRT_CARD,
  SHOW_SETTING,
} from "../types";

const initialState: SettingInterface = {
  quantityCard: 24,
  shirtColor: RED_SHIRT,
  isOpen: false,
};

export const settingReducer = (
  state: SettingInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case SHOW_SETTING:
      return { ...state, isOpen: true };
    case HIDE_SETTING:
      return { ...state, isOpen: false };
    case SET_QUANTITY_CARD:
      return { ...state, quantityCard: action.payload };
    case SET_SHIRT_CARD:
      return { ...state, shirtColor: action.payload };
    default:
      return state;
  }
};
