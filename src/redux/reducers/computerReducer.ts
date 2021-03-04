import { ComputerInterfaces } from "../interfaces/ComputerInterface";
import { Action } from "../interfaces/interfaces";
import {
  SET_BEAT_COMPUTER,
  SET_CARDS_COMP,
  SET_CARD_COMP,
  SET_MOVE_COMPUTER,
  SET_TAKES_COMPUTER,
} from "../types";

const initialState: ComputerInterfaces =
  localStorage.getItem("COMPUTER") === null
    ? { isMove: null, cards: [], isBeat: null, isTakes: null }
    : //@ts-ignore
      JSON.parse(localStorage.getItem("COMPUTER"));

export const computerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVE_COMPUTER:
      state = { ...state, isMove: action.payload };
      break;
    case SET_CARD_COMP:
      state = { ...state, cards: action.payload };
      break;
    case SET_CARDS_COMP:
      state = { ...state, cards: state.cards.concat(action.payload) };
      break;
    case SET_BEAT_COMPUTER:
      state = { ...state, isBeat: action.payload };
      break;
    case SET_TAKES_COMPUTER:
      state = { ...state, isTakes: action.payload };
      break;
  }
  localStorage.setItem("COMPUTER", JSON.stringify(state));
  return state;
};
