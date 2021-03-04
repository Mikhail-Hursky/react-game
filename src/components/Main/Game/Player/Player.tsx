import React, { ReactNode } from "react";
import "./Player.scss";
import { Card } from "../../../../assets/image/card/images";
import { batch, connect } from "react-redux";
import { setCardTable } from "../../../../redux/actions/tableActions";
import {
  setMoveUser,
  setCardUser,
} from "../../../../redux/actions/userActions";
import { setMoveComputer } from "../../../../redux/actions/computerActions";
import ButtonPlayer from "../PlayField/ButtonPlayer/ButtonPlayer";
import { throwACard } from "../Computer/Computer";

interface Props {
  [x: string]: any;
  card: Card[];
  isMoveUser: boolean | null;
  tableCards: Card[];
  isTakes: boolean;
}

function Player(props: Props) {
  // @ts-ignore
  const handlerClick = (event) => {
    const infoCard = event.target.alt.split("_");
    const weight = +infoCard[0];
    const suit = infoCard[1];
    const index = infoCard[2];
    if (props.isMoveUser) {
      const removed = props.card.splice(index, 1);
      batch(() => {
        props.setCardTable(removed);
        props.setMoveUser(false);
        props.setMoveComputer(true);
      });
      props.setCardUser(props.card);
    }
  };

  props.card.sort((a: Card, b: Card) => a.weight - b.weight);

  const cards: ReactNode[] = props.card.map((card: Card, i: number) => {
    //ATACK
    if (props.isMoveUser && !props.isBeat) {
      if (props.tableCards.length === 0) {
        return (
          <img
            className="border border-3 border-dark"
            onClick={handlerClick}
            key={i}
            src={card.img}
            alt={card.weight + "_" + card.suit + "_" + i}
          />
        );
      }
      if (props.tableCards.length > 0) {
        if (throwACard(props.tableCards, [card]) === 0) {
          return (
            <img
              className="border border-3 border-dark"
              onClick={handlerClick}
              key={i}
              src={card.img}
              alt={card.weight + "_" + card.suit + "_" + i}
            />
          );
        }
      }
    }

    //DEF
    if (props.isMoveUser && props.isBeat && !props.isTakes) {

      let tableCard = props.tableCards[props.tableCards.length - 1];
      if (
        (card.weight > tableCard.weight && card.suit === tableCard.suit) ||
        (card.weight > 14 && tableCard.weight < card.weight)
      ) {
        return (
          <img
            className="border border-3 border-dark"
            onClick={handlerClick}
            key={i}
            src={card.img}
            alt={card.weight + "_" + card.suit + "_" + i}
          />
        );
      }
    }

    return (
      <img
        className="border border-1 border-dark"
        key={i}
        src={card.img}
        alt={card.weight + "_" + card.suit + "_" + i}
      />
    );
  });

  return (
    <div className="Player">
      <ButtonPlayer />
      {cards}
    </div>
  );
}

//@ts-ignore
const mapStateToProps = (state) => ({
  card: state.user.cards,
  isMoveUser: state.user.isMove,
  isBeat: state.user.isBeat,
  tableCards: state.table.tableCards,
  isTakes: state.user.isTakes,
});

const mapDispatchToProps = {
  setCardTable,
  setMoveUser,
  setCardUser,
  setMoveComputer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
