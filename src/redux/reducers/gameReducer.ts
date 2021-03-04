import { Action, GameState } from "../interfaces/interfaces";
import { RESTART_GAME, START_GAME, STOP_GAME } from "../types";

const initialState: GameState =
  localStorage.getItem("GAME") === null
    ? {
        isStart: false,
      }
    : //@ts-ignore
      JSON.parse(localStorage.getItem("GAME"));

export const gameReducer = (
  state: GameState = initialState,
  action: Action
) => {
  switch (action.type) {
    case START_GAME:
      state = { ...state, isStart: true };
      break;
    case STOP_GAME:
      state = { ...state, isStart: false };
      break;
    case RESTART_GAME:
      break;
  }
  localStorage.setItem("GAME", JSON.stringify(state));
  return state;
};
