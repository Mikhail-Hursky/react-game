import React from "react";
import "./Game.scss";
import { Card, CARDS } from "../../../assets/image/card/images";
import { batch, connect } from "react-redux";
import StartGameMenu from "./StartGameMenu/StartGameMenu";
import Player from "./Player/Player";
import Computer from "./Computer/Computer";
import PlayField from "./PlayField/PlayField";
import {
  setCardComputer,
  setMoveComputer,
  setBeatComputer,
} from "../../../redux/actions/computerActions";
import {
  setTrumpSuit,
  setMove,
  setCardKit,
} from "../../../redux/actions/tableActions";
import {
  setCardUser,
  setMoveUser,
  setBeatUser,
} from "../../../redux/actions/userActions";
import { COMPUTER, USER } from "../../../redux/types";

interface Props {
  [x: string]: any;
  isStart: boolean;
  quantityCard: number;
}

function Game(props: Props) {
  if (props.isStart && !props.additionCard) {
    let cardArr: Card[] = [];
    CARDS.forEach((x) => cardArr.push({ ...x }));
    cardArr = cardArr.slice(0, props.quantityCard);
    cardArr.sort(() => Math.random() - 0.5);

    //add weight trump card
    cardArr.map((card) => {
      if (card.suit === cardArr[0].suit) card.weight += 14;
    });
    const trumpSuit = cardArr[0];
    props.setTrumpSuit(trumpSuit);

    const playerCard = cardArr.splice(cardArr.length - 6, cardArr.length);

    const computerCard = cardArr.splice(cardArr.length - 6, cardArr.length);

    const isMove = isMoveUser(playerCard, computerCard, trumpSuit.suit);

    batch(() => {
      props.setMove(isMove ? USER : COMPUTER); //table
      props.setCardKit(cardArr); //table

      props.setBeatComputer(isMove); //Computer
      props.setMoveComputer(!isMove); //Computer
      props.setCardComputer(computerCard); //Computer

      props.setMoveUser(isMove); //User
      props.setBeatUser(!isMove); //User
      props.setCardUser(playerCard); //User
    });

    if (trumpSuit) {
      return (
        <div className="Game">
          <Computer />
          <PlayField />
          <Player />
        </div>
      );
    }
  }

  return (
    <div className="Game">
      <StartGameMenu />
    </div>
  );
}

function isMoveUser(
  userArr: Card[],
  computerCard: Card[],
  suit: string
): boolean {
  const user = minCard(userArr, suit);
  const computer = minCard(computerCard, suit);

  if (user && computer) return user.weight < computer.weight;
  if (!user && computer) return false;
  if (user && !computer) return true;
  if (!user && !computer) return Math.random() - 0.5 > 0;
  return false;
}

function minCard(arr: Card[], suit: string): Card | undefined {
  let cardMin: Card | undefined;

  arr.forEach((card) => {
    if (card.suit === suit) {
      if (!cardMin) cardMin = card;
      if (cardMin.weight > card.weight) cardMin = card;
    }
  });

  return cardMin;
}

//@ts-ignore
const mapStateToProps = (state) => ({
  quantityCard: state.setting.quantityCard,
  isStart: state.game.isStart,
});

const mapDispatchToProps = {
  setCardComputer,
  setMoveComputer,
  setTrumpSuit,
  setMove,
  setCardKit,
  setCardUser,
  setMoveUser,
  setBeatUser,
  setBeatComputer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
