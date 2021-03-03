import { Action } from "../interfaces/interfaces";
import { Table } from "../interfaces/TableInterface";
import {
  REMOVE_CARDS_TABLE,
  SET_ADITION,
  SET_CARD_KIT,
  SET_CARD_TABLE,
  SET_MOVE,
  SET_TRUMP_SUIT,
} from "../types";

const initialState: Table = {
  cardsKit: [],
  discharge: [],
  tableCards: [],
  whoMove: null,
  suit: null,
  additionCard: false,
};

export const tableReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TRUMP_SUIT:
      return { ...state, suit: action.payload };
    case SET_CARD_KIT:
      return { ...state, cardsKit: action.payload };
    case SET_MOVE:
      return { ...state, whoMove: action.payload };
    case SET_CARD_TABLE:
      return { ...state, tableCards: state.tableCards.concat(action.payload) };
    case REMOVE_CARDS_TABLE:
      return { ...state, tableCards: [] };
    case SET_ADITION:
      return { ...state, additionCard: action.payload };
    default:
      return state;
  }
};
