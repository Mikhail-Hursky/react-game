import { ComputerInterfaces } from "../interfaces/ComputerInterface";
import { Action } from "../interfaces/interfaces";
import {
  SET_BEAT_COMPUTER,
  SET_CARDS_COMP,
  SET_CARD_COMP,
  SET_MOVE_COMPUTER,
  SET_TAKES_COMPUTER,
} from "../types";

const initialState: ComputerInterfaces = {
  isMove: null,
  cards: [],
  isBeat: null,
  isTakes: null,
};

export const computerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVE_COMPUTER:
      return { ...state, isMove: action.payload };
    case SET_CARD_COMP:
      return { ...state, cards: action.payload };
    case SET_CARDS_COMP:
      return { ...state, cards: state.cards.concat(action.payload) };
    case SET_BEAT_COMPUTER:
      return { ...state, isBeat: action.payload };
    case SET_TAKES_COMPUTER:
      return { ...state, isTakes: action.payload };
    default:
      return state;
  }
};
