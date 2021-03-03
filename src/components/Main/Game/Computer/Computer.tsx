import { ReactNode } from "react";
import "./Computer.scss";
import { Card } from "../../../../assets/image/card/images";
import { batch, connect } from "react-redux";
import { RED_SHIRT, USER } from "../../../../redux/types";
import shirtBlue from "../../../../assets/image/backB.png";
import shirtRed from "../../../../assets/image/backR.png";
import {
  setTakesСomputer,
  setCardComputer,
  setMoveComputer,
  setBeatComputer,
} from "../../../../redux/actions/computerActions";
import {
  setCardTable,
  cleanTable,
  setAdition,
} from "../../../../redux/actions/tableActions";
import {
  setMoveUser,
  setBeatUser,
  setCardsUser,
} from "../../../../redux/actions/userActions";

interface Props {
  [x: string]: any;
  color: string;
  cards: Card[];
  isBeat: boolean;
  suit: Card;
  isMove: boolean;
  takesСomputer: boolean;
  takesUser: boolean;
  tableCards: Card[];
}

const mapDispatchToProps = {
  setTakesСomputer,
  setCardComputer,
  setCardTable,
  setMoveUser,
  setMoveComputer,
  cleanTable,
  setBeatComputer,
  setBeatUser,
  setAdition,
  setCardsUser,
};

function Computer(props: Props) {
  props.cards.sort((a: Card, b: Card) => a.weight - b.weight);

  if (!props.takesUser) {
    //Отбиваеться или берет
    if (props.isMove && props.isBeat) {
      const lastCard = props.tableCards[props.tableCards.length - 1];
      const batterCard = batteringTheComputer(
        lastCard,
        props.cards,
        props.suit.suit
      );
      if (batterCard) {
        const removedCard = props.cards.splice(batterCard[1], 1);
        batch(() => {
          props.setCardComputer(props.cards);
          props.setMoveComputer(false);
        });

        props.setCardTable(removedCard);
        props.setMoveUser(true);
      } else {
        batch(() => {
          props.setMoveComputer(false);
          props.setTakesСomputer(true);
        });

        props.setMoveUser(true);
      }
    }

    //Ходит или бита
    if (props.isMove && !props.isBeat) {
      if (props.tableCards.length === 0) {
        const removedCard = props.cards.splice(0, 1);
        batch(() => {
          props.setCardComputer(props.cards);
          props.setMoveComputer(false);
          props.setCardTable(removedCard);
        });

        props.setMoveUser(true);
      } else {
        const index = throwACard(props.tableCards, props.cards);
        if (index) {
          const removedCard = props.cards.splice(index, 1);
          batch(() => {
            props.setCardComputer(props.cards);
            props.setMoveComputer(false);
            props.setCardTable(removedCard);
          });

          props.setMoveUser(true);
        } else {
          batch(() => {
            props.setMoveComputer(false);
            props.setBeatComputer(true);
            props.cleanTable();
          });
          props.setAdition(true);
          props.setMoveUser(true);
          props.setBeatUser(false);
        }
      }
    }
  } else {
    const arr = props.cards.filter((card) => {
      props.tableCards.forEach((tableCard) => {
        if (card.weight === tableCard.weight) {
          return true;
        }
        if (
          card.suit === props.suit.suit &&
          tableCard.weight === card.weight - 14
        ) {
          return true;
        }
        return false;
      });
    });

    batch(() => props.setCardsUser(arr));
  }

  const cards: ReactNode[] = props.cards.map((card: Card) => {
    if (props.color === RED_SHIRT)
      return <img src={shirtRed} key={card.img} alt="" />;
    else return <img src={shirtBlue} key={card.img} alt="" />;
  });

  /* const cards: ReactNode[] = props.cards.map((card: Card) => {
      return <img src={card.img} key={card.img} alt="" />;
  }); */

  return <div className="Computer">{cards}</div>;
}

function batteringTheComputer(
  lastCard: Card,
  cardArr: Card[],
  suit: string
): undefined | [Card, number] {
  let infoCard: undefined | [Card, number] = undefined;
  cardArr.find((card: Card, index: number) => {
    if (card.suit === lastCard.suit || card.suit === suit) {
      if (card.weight > lastCard.weight) {
        infoCard = [card, index];
        return infoCard;
      }
    }
  });
  return infoCard;
}

export function throwACard(
  tableCards: Card[],
  computerCard: Card[]
): number | undefined {
  let result: number | undefined = undefined;
  tableCards.forEach((tableCard) => {
    computerCard.find((computerCard, index) => {
      let weightComp = cutTheWeightOffTheTrumpCard(computerCard);
      let weightTable = cutTheWeightOffTheTrumpCard(tableCard);

      if (weightComp === weightTable) {
        result = index;
        return computerCard;
      }
    });
    if (result) return result;
  });
  return result;
}

export function cutTheWeightOffTheTrumpCard(card: Card): number {
  let weight = card.weight;
  if (weight > 14) weight -= 14;
  return weight;
}

//@ts-ignore
const mapStateToProps = (state) => ({
  color: state.setting.shirtColor,
  cards: state.computer.cards,
  isBeat: state.computer.isBeat,
  suit: state.table.suit,
  isMove: state.computer.isMove,
  takesСomputer: state.computer.isTakes,
  takesUser: state.user.isTakes,
  tableCards: state.table.tableCards,
});

export default connect(mapStateToProps, mapDispatchToProps)(Computer);
