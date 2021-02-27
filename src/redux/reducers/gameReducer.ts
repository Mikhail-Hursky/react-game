import {Game, GameState} from "../interfaces/interfaces"
import {
    BEAT_OFF_USER,
    RESTART_GAME,
    SET_CARD_COMP,
    SET_CARD_KIT,
    SET_CARD_PLAYER, SET_CARDS_TABLE,
    SET_MOVE,
    SET_TRUMP_SUIT,
    START_GAME,
    STOP_GAME,
    REMOVE_CARDS_TABLE,
    SET_CARD_TABLE, BEAT_COMPUTER
} from "../types";

const initialState: GameState = {
    aiCard: [],
    cardsKit: [],
    isBeatUser: undefined,
    isMoveUser: undefined,
    isStart: false,
    suit: undefined,
    tableCards: [],
    tableCard: undefined,
    userCard: [],
    wasteCards: []
}

export const gameReducer = (state: GameState = initialState, action: Game) => {
    switch (action.type) {
        case START_GAME:
            return {...state, isStart: true}
        case STOP_GAME:
            return {...state, isStart: false}
        case RESTART_GAME:
            return
        case SET_TRUMP_SUIT:
            return {...state, suit: action.payload}
        case SET_CARD_KIT:
            return {...state, cardsKit: action.payload}
        case SET_CARD_COMP:
            return {...state, aiCard: action.payload}
        case SET_CARD_PLAYER:
            return {...state, userCard: action.payload}
        case SET_MOVE:
            return {...state, isMoveUser: action.payload}
        case BEAT_OFF_USER:
            return {...state, isBeatUser: action.payload}
        case SET_CARDS_TABLE:
            return {...state, tableCards: action.payload};
        case SET_CARD_TABLE:
            return {...state, tableCard: action.payload};
        case REMOVE_CARDS_TABLE:
            return {...state, tableCards: []};
        case BEAT_COMPUTER:
            return {...state, isBeatComputer: action.payload};
        default:
            return state;
    }
}
