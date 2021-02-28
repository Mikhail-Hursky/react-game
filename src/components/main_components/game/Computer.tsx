import React, {ReactNode} from 'react';
import '../../../styles/main/game/Computer.scss';
import {Card} from "../../../assets/image/card/images";
import {connect, useDispatch, useSelector} from "react-redux";
import {RED_SHIRT} from "../../../redux/types";
import shirtBlue from '../../../assets/image/backB.png'
import shirtRed from '../../../assets/image/backR.png'
import {addCardComputer, setCardTable, setMove} from "../../../redux/actions/gameActions";


function Computer() {
    const dispatch = useDispatch()
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)
    // @ts-ignore
    const cardArr = useSelector(state => state.game.aiCard)
    // @ts-ignore
    const isBeatUser = useSelector(state => state.game.isBeatComputer)
    // @ts-ignore
    const suit = useSelector(state => state.game.suit)
    // @ts-ignore
    const isMoveUser = useSelector(state => state.game.isMoveUser)
    // @ts-ignore
    const lastCard = useSelector(state => state.game.tableCards)
    const cards: ReactNode[] = [];

    cardArr.sort((a: Card, b: Card) => a.weight - b.weight);

    if (!isBeatUser && !isMoveUser && lastCard.length > 0) {
        const card = batteringTheComputer(lastCard[lastCard.length - 1], cardArr, suit.suit);

        if (!card[0]) {
            takeAway()
        } else {
            const removed = cardArr.splice(card[1], 1);
            dispatch(addCardComputer(cardArr));
            dispatch(setMove(true));
            dispatch(setCardTable(removed));

        }
    }

    for (let i = cardArr.length; 0 < i; i--) {
        if (color === RED_SHIRT) cards.push((<img src={shirtRed} key={cardArr.img} alt=""/>));
        else cards.push((<img src={shirtBlue} key={cardArr.img} alt=""/>));
    }

    return (
        <div className="Computer">
            {cardArr.map((c: Card) => <img src={c.img} key={c.img} alt=""/>)}
        </div>
    );
}


function batteringTheComputer(lastCard: Card,
                              cardArr: Card[],
                              suit: string): [Card | undefined, number?] {
    let infoCard: [Card | undefined, number?] = [undefined];
    cardArr.find((card: Card, index: number) => {
        if (card.suit === lastCard.suit || card.suit === suit) {
            if (card.weight > lastCard.weight) {
                infoCard = [card, index];
                return infoCard
            }
        }
    })
    return infoCard[0] === undefined ? [undefined] : infoCard;
}

function takeAway() {
    console.log('Take away')
}


/*const mapStateToProps= state => ({

})

const mapDispatchToProps= {

}*/

export default Computer;
