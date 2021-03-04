import { START_GAME, STOP_GAME } from "../types";

export const startGame = () => ({ type: START_GAME });
export const stopGame = () => ({ type: STOP_GAME });
