import React from "react";
import { connect, useSelector } from "react-redux";
import { RED_SHIRT } from "../../../../../redux/types";
import shirtRed from "../../../../../assets/image/backR.png";
import shirtBlue from "../../../../../assets/image/backB.png";
import { Card } from "../../../../../redux/interfaces/interfaces";

interface Props {
  color: string;
  cardsSuit: Card;
}

function CardsKit(props: Props) {
  //@ts-ignore
  const cards = useSelector((state) => state.table.cardsKit.length)
  return (
    <div className="Set">
      <img className="suit" src={props.cardsSuit.img} alt="" />
      <div>
        {props.color === RED_SHIRT ? (
          <img src={shirtRed} alt="" />
        ) : (
          <img src={shirtBlue} alt="" />
        )}
        <h2>{cards}</h2>
      </div>
    </div>
  );
}

//@ts-ignore
const mapStateToProps = (state) => ({
  color: state.setting.shirtColor,
  cardsSuit: state.table.suit,
});

export default connect(mapStateToProps)(CardsKit);
