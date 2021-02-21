import {SHOW_LOADER} from "../types";

export interface GameState {
    aiCard: string[]
    userCard: string[]
    wasteCards: string[]
}

interface Action {
    type: typeof SHOW_LOADER,
}

export type ActionType = Action
