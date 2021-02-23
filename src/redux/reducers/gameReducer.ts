import {Game, GameState} from "../interfaces/interfaces"
import {
    START_GAME,
    STOP_GAME,
    RESTART_GAME
} from "../types";

const initialState: GameState = {
    aiCard: [],
    userCard: [],
    wasteCards: [],
    isStart: false,

}

export const gameReducer = (state: GameState = initialState, action: Game) => {
    switch (action.type) {
        case START_GAME:
            return {...state, isStart: true}
        case STOP_GAME:
            return {...state, isStart: false}
        case RESTART_GAME:
            return
        default:
            return state;
    }
}
