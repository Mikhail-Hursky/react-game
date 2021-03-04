import { BLUE_SHIRT, RED_SHIRT } from "../types";

export interface SettingInterface {
    isOpen: boolean
    quantityCard: number,
    shirtColor: typeof RED_SHIRT | typeof BLUE_SHIRT
}