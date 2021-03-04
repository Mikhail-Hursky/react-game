import { batch, connect } from "react-redux";
import { Card } from "../../../../../redux/interfaces/interfaces";
import {
  setAdition,
  setMove,
  setCardKit,
} from "../../../../../redux/actions/tableActions";
import { setCardUser } from "../../../../../redux/actions/userActions";
import { setCardComputer } from "../../../../../redux/actions/computerActions";
import { COMPUTER, USER } from "../../../../../redux/types";

interface Props {
  [x: string]: any;
  cards: Card[];
  additionCard: boolean;
  whoMove: string;
  cardUser: Card[];
  cardComp: Card[];
  cardsKit: Card[];
}

function GameTable(props: Props) {
  if (props.additionCard) {
    let str: string;

    if (props.whoMove === USER) {
      let remainder = props.cardUser.length - 6;
      if (remainder < 0) {
        if (props.cardsKit.length + remainder > 0) {
          const arr = props.cardsKit.splice(remainder);
          props = { ...props, cardUser: props.cardUser.concat(arr) };
        } else {
          props = {
            ...props,
            cardComp: props.cardUser.concat(props.cardsKit),
            cardsKit: [],
          };
        }
      }
      remainder = props.cardComp.length - 6;
      if (remainder < 0) {
        if (props.cardsKit.length + remainder > 0) {
          const arr = props.cardsKit.splice(remainder);
          props = { ...props, cardComp: props.cardComp.concat(arr) };
        } else {
          props = {
            ...props,
            cardComp: props.cardComp.concat(props.cardsKit),
            cardsKit: [],
          };
        }
        str = COMPUTER;
      } else {
        str = USER;
      }
    } else if (props.whoMove === COMPUTER) {
      let remainder = props.cardComp.length - 6;

      if (remainder < 0) {
        if (props.cardsKit.length + remainder > 0) {
          const arr = props.cardsKit.splice(remainder);
          props = { ...props, cardComp: props.cardComp.concat(arr) };
        } else {
          props = {
            ...props,
            cardComp: props.cardComp.concat(props.cardsKit),
            cardsKit: [],
          };
        }
      }
      remainder = props.cardUser.length - 6;
      if (remainder < 0) {
        if (props.cardsKit.length + remainder > 0) {
          const arr = props.cardsKit.splice(remainder);
          props = { ...props, cardUser: props.cardUser.concat(arr) };
        } else {
          props = {
            ...props,
            cardComp: props.cardUser.concat(props.cardsKit),
            cardsKit: [],
          };
        }
        str = USER;
      } else {
        str = COMPUTER;
      }
    }
    batch(() => {
      props.setMove(str);
      props.setCardUser(props.cardUser);
      props.setCardKit(props.cardsKit);
      props.setCardComputer(props.cardComp);
      props.setAdition(false);
    });
  }

  return (
    <div className="GameTable">
      {props.cards.length > 0
        ? props.cards.map((card: Card, index: number) => {
            if (index % 2 !== 0)
              return <img className="BeatCard" key={card.img} src={card.img} />;
            return <img key={card.img} src={card.img} />;
          })
        : ""}
    </div>
  );
}

//@ts-ignore
const mapStateToProps = (state) => ({
  cards: state.table.tableCards,
  additionCard: state.table.additionCard,
  whoMove: state.table.whoMove,
  cardUser: state.user.cards,
  cardComp: state.computer.cards,
  cardsKit: state.table.cardsKit,
});

const mapDispatchToProps = {
  setAdition,
  setMove,
  setCardUser,
  setCardKit,
  setCardComputer,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameTable);
