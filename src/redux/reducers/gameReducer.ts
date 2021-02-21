import {ActionType, GameState} from "../interfaces/interfaces"

const initialState: GameState = {
    aiCard: [],
    userCard: [],
    wasteCards: []

}

export const gameReducer = (state: GameState = initialState, action: ActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}
