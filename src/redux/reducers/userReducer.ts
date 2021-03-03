import { Action } from "../interfaces/interfaces";
import { UserInterfaces } from "../interfaces/UserInterface";
import {
  SET_MOVE_USER,
  SET_BEAT_USER,
  SET_CARD_USER,
  SET_TAKES_USER,
  SET_CARDS_USER,
} from "../types";

const initialState: UserInterfaces = {
  isMove: null,
  cards: [],
  isBeat: null,
  isTakes: false,
};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVE_USER:
      return { ...state, isMove: action.payload };
    case SET_TAKES_USER:
      return { ...state, isTakes: action.payload };
    case SET_CARD_USER:
      return { ...state, cards: action.payload };
    case SET_CARDS_USER:
      return { ...state, cards: state.cards.concat(action.payload) };
    case SET_BEAT_USER:
      return { ...state, isBeat: action.payload };
    default:
      return state;
  }
};
