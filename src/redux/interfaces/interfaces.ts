import {
    HIDE_SETTING,
    SHOW_SETTING,
    RED_SHIRT,
    BLUE_SHIRT,
    SET_QUANTITY_CARD,
    SET_SHIRT_CARD,
    START_GAME,
    STOP_GAME,
    RESTART_GAME,
    SET_CARD_KIT,
    SET_TRUMP_SUIT,
    SET_CARD_COMP,
    SET_CARD_PLAYER,
    SET_MOVE,
    SET_CARDS_TABLE,
    BEAT_OFF_USER,
    REMOVE_CARDS_TABLE,
    SET_CARD_TABLE,
    BEAT_COMPUTER
} from "../types";
import {Card} from "../../assets/image/card/images";

export interface GameState {
    suit?: Card
    cardsKit: Card[]
    aiCard: string[]
    userCard: string[]
    wasteCards: string[]
    isMoveUser?: boolean
    isBeatUser?: boolean
    tableCards: Card[]
    tableCard?: Card
    isStart: boolean
}

export interface GameSettings {
    isOpen: boolean
    quantityCard: number,
    shirtColor: typeof RED_SHIRT | typeof BLUE_SHIRT
}

interface ActionSetting {
    type: typeof SHOW_SETTING |
        typeof HIDE_SETTING |
        typeof SET_QUANTITY_CARD |
        typeof SET_SHIRT_CARD,
    payload: boolean | number | string
}

interface ActionGame {
    type: typeof START_GAME |
        typeof STOP_GAME |
        typeof RESTART_GAME |
        typeof SET_CARD_KIT |
        typeof SET_TRUMP_SUIT |
        typeof SET_CARD_COMP |
        typeof SET_CARD_PLAYER |
        typeof SET_MOVE |
        typeof BEAT_OFF_USER |
        typeof SET_CARDS_TABLE|
        typeof REMOVE_CARDS_TABLE|
        typeof SET_CARD_TABLE|
        typeof BEAT_COMPUTER

    payload: boolean | number | string | Card
}

export type Setting = ActionSetting
export type Game = ActionGame
