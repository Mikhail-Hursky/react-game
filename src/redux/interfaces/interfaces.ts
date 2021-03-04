import {
  START_GAME,
  STOP_GAME,
  RESTART_GAME,
  SET_CARD_KIT,
  SET_TRUMP_SUIT,
  SET_CARD_COMP,
  SET_CARD_USER,
  SET_MOVE,
  SET_CARDS_TABLE,
  REMOVE_CARDS_TABLE,
  SET_CARD_TABLE,
} from "../types";

export interface Card {
  img: string;
  weight: number;
  suit: string;
  
}
export interface GameState {
  isStart: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}

interface ActionGame {
  type:
    | typeof START_GAME
    | typeof STOP_GAME
    | typeof RESTART_GAME
    | typeof SET_CARD_KIT
    | typeof SET_TRUMP_SUIT
    | typeof SET_CARD_COMP
    | typeof SET_CARD_USER
    | typeof SET_MOVE
    | typeof SET_CARDS_TABLE
    | typeof REMOVE_CARDS_TABLE
    | typeof SET_CARD_TABLE

  payload: any;
}

export type Game = ActionGame;
export type User = ActionGame;
