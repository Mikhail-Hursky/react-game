import React from 'react';
import '../../../styles/main/game/Game.scss';
import {Card, CARDS} from '../../../assets/image/card/images';
import {useSelector} from "react-redux";
import StartGameMenu from "./StartGameMenu";
import Player from './Player';
import Computer from "./Computer";
import PlayField from './PlayField';

export default () => {
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

        const playerCard = cardArr.splice(cardArr.length - 6, cardArr.length);
        const computerCard = cardArr.splice(cardArr.length - 6, cardArr.length);
        const trumpSuit = cardArr.shift();

        if (trumpSuit) {
            return (
                <div className='Game'>
                    <Computer card={computerCard}/>
                    <PlayField suit={trumpSuit} card={cardArr}/>
                    <Player card={playerCard}/>
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
