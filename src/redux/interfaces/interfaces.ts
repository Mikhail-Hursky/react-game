import {
    HIDE_SETTING,
    SHOW_SETTING,
    RED_SHIRT,
    BLUE_SHIRT,
    SET_QUANTITY_CARD,
    SET_SHIRT_CARD, START_GAME, STOP_GAME, RESTART_GAME
} from "../types";

export interface GameState {
    aiCard: string[]
    userCard: string[]
    wasteCards: string[]
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
        typeof RESTART_GAME
    payload: boolean | number | string
}

export type Setting = ActionSetting
export type Game = ActionGame
