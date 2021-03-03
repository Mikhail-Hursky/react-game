import { Card } from "../interfaces/interfaces";
import {
  SET_BEAT_USER,
  SET_CARDS_USER,
  SET_CARD_USER,
  SET_MOVE_USER,
  SET_TAKES_USER,
} from "../types";

export const setBeatUser = (isBeat: boolean) => ({
  type: SET_BEAT_USER,
  payload: isBeat,
});

export const setCardUser = (cards: Card[]) => ({
  type: SET_CARD_USER,
  payload: cards,
});

export const setTakesUser = (isTakes: boolean) => ({
  type: SET_TAKES_USER,
  payload: isTakes,
});

export const setMoveUser = (isMove: boolean) => ({
  type: SET_MOVE_USER,
  payload: isMove,
});

export const setCardsUser = (cards: Card[]) => ({
  type: SET_CARDS_USER,
  payload: cards,
})
