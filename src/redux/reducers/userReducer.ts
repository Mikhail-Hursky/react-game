import { Action } from "../interfaces/interfaces";
import { UserInterfaces } from "../interfaces/UserInterface";
import {
  SET_MOVE_USER,
  SET_BEAT_USER,
  SET_CARD_USER,
  SET_TAKES_USER,
  SET_CARDS_USER,
} from "../types";

const initialState: UserInterfaces =
  localStorage.getItem("USER") === null
    ? {
        isMove: null,
        cards: [],
        isBeat: null,
        isTakes: false,
      }
    : //@ts-ignore
      JSON.parse(localStorage.getItem("USER"));

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVE_USER:
      state = { ...state, isMove: action.payload };
      break;
    case SET_TAKES_USER:
      state = { ...state, isTakes: action.payload };
      break;
    case SET_CARD_USER:
      state = { ...state, cards: action.payload };
      break;
    case SET_CARDS_USER:
      state = { ...state, cards: state.cards.concat(action.payload) };
      break;
    case SET_BEAT_USER:
      state = { ...state, isBeat: action.payload };
      break;
  }
  localStorage.setItem("USER", JSON.stringify(state));
  return state;
};
