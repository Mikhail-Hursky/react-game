import { Card } from "../../assets/image/card/images";

export interface ComputerInterfaces {
    isMove: boolean | null;
    cards: Card[];
    isBeat: boolean | null;
    isTakes: boolean | null;
  }