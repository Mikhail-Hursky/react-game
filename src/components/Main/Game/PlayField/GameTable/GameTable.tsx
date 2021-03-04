import { batch, connect } from "react-redux";
import { Card } from "../../../../../redux/interfaces/interfaces";
import {
  setAdition,
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
    let arr: [Card[], Card[], Card[]];
    if (props.whoMove === USER) {
      arr = setCards(props.cardUser, props.cardComp, props.cardsKit);
      console.log(arr, USER);
      props.setCardUser(arr[0]);
      props.setCardKit(arr[2]);
      props.setCardComputer(arr[1]);
      props.setAdition(false);
    } else if (props.whoMove === COMPUTER) {
      arr = setCards(props.cardComp, props.cardUser, props.cardsKit);
      console.log(arr, COMPUTER);
      props.setCardUser([...arr[1]]);
      props.setCardKit([...arr[2]]);
      props.setCardComputer([...arr[0]]);
      props.setAdition(false);
    }
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

function setCards(
  firsPlayer: Card[],
  lastPlayer: Card[],
  cardsKit: Card[]
): [Card[], Card[], Card[]] {
  let FIRSTPLAYER = firsPlayer.length;
  let LASTPLAYER = lastPlayer.length;
  let arr;

  if (FIRSTPLAYER < 6) {
    arr = cardsKit.splice(FIRSTPLAYER - 6);
    firsPlayer = firsPlayer.concat(arr);
  }
  if (LASTPLAYER < 6) {
    arr = cardsKit.splice(LASTPLAYER - 6);
    lastPlayer = lastPlayer.concat(arr);
  }

  console.log([firsPlayer, lastPlayer, cardsKit]);

  return [firsPlayer, lastPlayer, cardsKit];
}

const mapDispatchToProps = {
  setAdition,
  setCardUser,
  setCardKit,
  setCardComputer,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameTable);
