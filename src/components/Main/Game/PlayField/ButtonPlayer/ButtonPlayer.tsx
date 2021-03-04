import React from "react";
import { batch, connect, useSelector } from "react-redux";
import { Card } from "../../../../../redux/interfaces/interfaces";
import {
  cleanTable,
  setAdition,
  setMove
} from "../../../../../redux/actions/tableActions";
import {
  setBeatUser,
  setCardsUser,
  setTakesUser,
  setMoveUser,
} from "../../../../../redux/actions/userActions";
import {
  setCardsComputer,
  setTakesСomputer,
  setMoveComputer,
  setBeatComputer,
} from "../../../../../redux/actions/computerActions";
import { COMPUTER } from "../../../../../redux/types";

interface Props {
  [x: string]: any;
  isMove: boolean;
  isTakesComp: boolean;
  tableCards: Card[];
  isBeat: boolean;
  cardsComp: Card[];
  cardsUser: Card[];
}

function ButtonPlayer(props: Props) {
  console.log(
    props.isMove,
    props.isBeat,
    props.tableCards.length > 0,
    props.isTakesComp
  );

  //ATACK
  if (
    props.isMove &&
    !props.isBeat &&
    props.tableCards.length > 0 &&
    !props.isTakesComp
  ) {
    return (
      <button
        type="button"
        onClick={() => {
          
          batch(() => {
            props.cleanTable();
            props.setAdition(true);
          });
          batch(() => {
            props.setMove(COMPUTER)
            props.setMoveComputer(true);
            props.setMoveUser(false);
            props.setBeatComputer(false);
            props.setBeatUser(true);
          });
        }}
        className="btn btn-warning"
      >
        Бито
      </button>
    );
  }

  if (
    props.isMove &&
    !props.isBeat &&
    props.tableCards.length > 0 &&
    props.isTakesComp
  ) {
    return (
      <button
        type="button"
        onClick={() => {
          batch(() => {
            props.setCardsComputer(props.tableCards);
          });
          batch(() => {
            props.setMoveComputer(false);
            props.setMoveUser(true);
            props.setBeatComputer(true);
            props.setTakesСomputer(false);
            props.setBeatUser(false);
            props.cleanTable();
            props.setAdition(true);
          });
        }}
        className="btn btn-warning"
      >
        Забирай
      </button>
    );
  }

  //DEF
  if (props.isMove && props.isBeat) {
    return (
      <button
        type="button"
        onClick={() => {
          batch(() => {
            props.setTakesUser(true);
          });
          batch(() => {
            props.setCardsUser(props.tableCards);
            props.cleanTable();
            props.setTakesUser(false);
            props.setMoveComputer(true);
            props.setMoveUser(false);
            props.setBeatComputer(false);
            props.setBeatUser(true);
            props.setAdition(true);
          });
        }}
        className="btn btn-warning"
      >
        Забираю
      </button>
    );
  }

  return <></>;
}

//@ts-ignore
const mapStateToProps = (state) => ({
  isMove: state.user.isMove,
  isTakesComp: state.computer.isTakes,
  tableCards: state.table.tableCards,
  isBeat: state.user.isBeat,
  cardsComp: state.computer.cards,
  cardsUser: state.user.cards,
});

const mapDispatchToProps = {
  cleanTable,
  setAdition,
  setBeatUser,
  setCardsUser,
  setTakesUser,
  setMoveUser,
  setCardsComputer,
  setTakesСomputer,
  setMoveComputer,
  setMove,
  setBeatComputer,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPlayer);
