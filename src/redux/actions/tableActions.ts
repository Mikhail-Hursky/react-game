import { Card } from "../interfaces/interfaces";
import {
  COMPUTER,
  REMOVE_CARDS_TABLE,
  SET_ADITION,
  SET_CARD_KIT,
  SET_CARD_TABLE,
  SET_MOVE,
  SET_TRUMP_SUIT,
  USER,
} from "../types";

export const setTrumpSuit = (card: Card) => ({
  type: SET_TRUMP_SUIT,
  payload: card,
});

export const setMove = (whoMove: typeof USER | typeof COMPUTER) => ({
  type: SET_MOVE,
  payload: whoMove,
});

export const setCardKit = (cards: Card[]) => ({
  type: SET_CARD_KIT,
  payload: cards,
});

export const setCardTable = (card: Card[]) => ({
  type: SET_CARD_TABLE,
  payload: card,
});

export const cleanTable = () => ({ type: REMOVE_CARDS_TABLE });

export const setAdition = (bool: boolean) => ({
  type: SET_ADITION,
  payload: bool,
});
