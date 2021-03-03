import { Action, GameState } from "../interfaces/interfaces";
import { RESTART_GAME, START_GAME, STOP_GAME } from "../types";

const initialState: GameState = {
  isStart: false,
};

export const gameReducer = (
  state: GameState = initialState,
  action: Action
) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, isStart: true };
    case STOP_GAME:
      return { ...state, isStart: false };
    case RESTART_GAME:
      return;
    default:
      return state;
  }
};
