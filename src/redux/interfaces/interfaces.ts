import {HIDE_SETTING, SHOW_SETTING, RED_SHIRT, BLUE_SHIRT, SET_QUANTITY_CARD, SET_SHIRT_CARD} from "../types";

export interface GameState {
    aiCard: string[]
    userCard: string[]
    wasteCards: string[]
}

export interface GameSettings {
    isOpen: boolean
    quantityCard: number,
    shirtColor: typeof RED_SHIRT | typeof BLUE_SHIRT
}

interface Action {
    type: typeof SHOW_SETTING | typeof HIDE_SETTING | typeof SET_QUANTITY_CARD | typeof SET_SHIRT_CARD,
    payload: boolean | number | string
}

export type ActionSettings = Action
export type ActionType = Action
