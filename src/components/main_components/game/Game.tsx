import React from 'react';
import '../../../styles/main/game/Game.scss';
import {Card, CARDS} from '../../../assets/image/card/images';
import {useDispatch, useSelector} from "react-redux";
import StartGameMenu from "./StartGameMenu";
import Player from './Player';
import Computer from "./Computer";
import PlayField from './PlayField/PlayField';
import {addCardComputer, addCardKit, addCardPlayer, addTrumpSuit, beatOffTheUser, setMove} from "../../../redux/actions/gameActions";

export default () => {
    const dispatch = useDispatch()
    // @ts-ignore
    const quantityCard = useSelector(state => state.setting.quantityCard);
    // @ts-ignore
    const isStart = useSelector(state => state.game.isStart);

    if (isStart) {
        let cardArr: Card[] = [];
        CARDS.forEach(x => cardArr.push({...x}));
        cardArr = cardArr.slice(0, quantityCard);
        cardArr.sort(() => Math.random() - 0.5);

        //add weight trump card
        cardArr.map(card => {
            if (card.suit === cardArr[0].suit) card.weight += 14
        });
        const trumpSuit = cardArr[0];
        dispatch(addTrumpSuit(trumpSuit));

        const playerCard = cardArr.splice(cardArr.length - 6, cardArr.length);
        dispatch(addCardPlayer(playerCard));

        const computerCard = cardArr.splice(cardArr.length - 6, cardArr.length);
        dispatch(addCardComputer(computerCard));

        const isMove = isMoveUser(playerCard, computerCard, trumpSuit.suit)
        dispatch(setMove(isMove));
        dispatch(beatOffTheUser(!isMove));



        dispatch(addCardKit(cardArr));

        if (trumpSuit) {

            return (
                <div className='Game'>
                    <Computer />
                    <PlayField/>
                    <Player/>
                </div>
            )
        }
    }

    return (
        <div className='Game'>
            <StartGameMenu/>
        </div>
    );
}


function isMoveUser(userArr: Card[], computerCard: Card[], suit: string): boolean {
    const user = minCard(userArr, suit);
    const computer = minCard(computerCard, suit);

    if (user && computer) return user.weight < computer.weight
    if (!user && computer) return false;
    if (user && !computer) return true;
    if (!user && !computer) return (Math.random() - 0.5) > 0;
    return false;
}

function minCard(arr: Card[], suit: string): Card | undefined {
    let cardMin: Card | undefined;

    arr.forEach(card => {
        if (card.suit === suit) {
            if (!cardMin) cardMin = card
            if (cardMin.weight > card.weight) cardMin = card
        }
    })

    return cardMin;
}
