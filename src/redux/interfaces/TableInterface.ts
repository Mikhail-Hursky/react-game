import { Card } from "../../assets/image/card/images";
import { USER, COMPUTER } from "../types";

export interface Table {
  suit: Card | null;
  cardsKit: Card[] | null;
  discharge: Card[] | null;
  tableCards: Card[];
  whoMove: typeof USER | typeof COMPUTER | null;
  additionCard:boolean
}
