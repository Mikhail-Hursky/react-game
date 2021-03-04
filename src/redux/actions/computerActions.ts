import { Card } from "../interfaces/interfaces";
import { SET_BEAT_COMPUTER, SET_CARD_COMP,SET_CARDS_COMP, SET_MOVE_COMPUTER, SET_TAKES_COMPUTER } from "../types";

export const setCardComputer = (cards: Card[]) => ({
    type: SET_CARD_COMP,
    payload: cards,
  });

  export const setCardsComputer = (cards: Card[]) => ({
    type: SET_CARDS_COMP,
    payload: cards,
  });

  export const setBeatComputer = (beatComputer: boolean) => ({
    type: SET_BEAT_COMPUTER,
    payload: beatComputer,
  });

  export const setTakesСomputer = (takes: boolean) => ({
    type: SET_TAKES_COMPUTER,
    payload: takes,
  });

  export const setMoveComputer = (isMove: boolean) => ({
    type: SET_MOVE_COMPUTER,
    payload: isMove,
  });