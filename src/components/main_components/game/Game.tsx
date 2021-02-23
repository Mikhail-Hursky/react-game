import React from 'react';
import '../../../styles/main/game/Game.scss';
import {CARDS} from '../../../assets/image/card/images';
import {useSelector} from "react-redux";
import StartGameMenu from "./StartGameMenu";

export default () => {
    // @ts-ignore
    const quantityCard = useSelector(state => state.setting.quantityCard)
    const cardArr = CARDS.slice(0, quantityCard).map((c,i) => <img src={c.img} alt={(i+1).toString()}/>);
    cardArr.sort(() => Math.random() - 0.5);
    // @ts-ignore
    const isStart = useSelector(state => state.game.isStart)

    if (isStart) {
        return (
            <div className='Game'>
                {cardArr}
            </div>
        )
    }


    return (
        <div className='Game'>
            <StartGameMenu/>
        </div>
    );

}
