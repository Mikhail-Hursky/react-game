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

const initialState: Table =
  localStorage.getItem("TABLE") === null
    ? {
        cardsKit: [],
        discharge: [],
        tableCards: [],
        whoMove: null,
        suit: null,
        additionCard: false,
      }
    : //@ts-ignore
      JSON.parse(localStorage.getItem("TABLE"));

export const tableReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TRUMP_SUIT:
      state = { ...state, suit: action.payload };
      break;
    case SET_CARD_KIT:
      state = { ...state, cardsKit: action.payload };
      break;
    case SET_MOVE:
      state = { ...state, whoMove: action.payload };
      break;
    case SET_CARD_TABLE:
      state = { ...state, tableCards: state.tableCards.concat(action.payload) };
      break;
    case REMOVE_CARDS_TABLE:
      state = { ...state, tableCards: [] };
      break;
    case SET_ADITION:
      state = { ...state, additionCard: action.payload };
      break;
  }
  localStorage.setItem("TABLE", JSON.stringify(state));
  return state;
};
