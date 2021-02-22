import {HIDE_SETTING, SET_QUANTITY_CARD, SET_SHIRT_CARD, SHOW_SETTING} from "../types";

export const hideSetting = () => ({type: HIDE_SETTING});
export const showSetting = () => ({type: SHOW_SETTING});
export const setQuantityCard = (action: number) => ({type: SET_QUANTITY_CARD, payload: action});
export const setColorShirt = (action: string) => ({type: SET_SHIRT_CARD, payload: action});
