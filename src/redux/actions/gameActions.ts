import {
    BEAT_OFF_USER,
    SET_CARD_COMP,
    SET_CARD_KIT,
    SET_CARD_PLAYER,
    SET_CARDS_TABLE,
    SET_MOVE,
    SET_TRUMP_SUIT,
    START_GAME,
    STOP_GAME,
    REMOVE_CARDS_TABLE,
    SET_CARD_TABLE,
    BEAT_COMPUTER
} from "../types";
import {Card} from "../../assets/image/card/images";

export const startGame = () => ({type: START_GAME});
export const addTrumpSuit = (card: Card) => ({type: SET_TRUMP_SUIT, payload: card});
export const addCardKit = (cards: Card[]) => ({type: SET_CARD_KIT, payload: cards});
export const addCardComputer = (cards: Card[]) => ({type: SET_CARD_COMP, payload: cards});
export const addCardPlayer = (cards: Card[]) => ({type: SET_CARD_PLAYER, payload: cards});
export const setMove = (isMoveUser: boolean) => ({type: SET_MOVE, payload: isMoveUser});
export const beatOffTheUser = (isBeatUser: boolean) => ({type: BEAT_OFF_USER, payload: isBeatUser});
export const setCardsTable = (card: Card[]) => ({type: SET_CARDS_TABLE, payload: card});
export const setCardTable = (card: Card | undefined) => ({type: SET_CARD_TABLE, payload: card});
export const cleanTable = () => ({type: REMOVE_CARDS_TABLE});
export const stopGame = () => ({type: STOP_GAME})
export const beatComputer = (beatComputer:boolean) => ({type: BEAT_COMPUTER, payload: beatComputer})
