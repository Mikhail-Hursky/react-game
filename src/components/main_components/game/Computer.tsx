import React, {ReactNode} from 'react';
import '../../../styles/main/game/Computer.scss';
import {Card} from "../../../assets/image/card/images";
import {useSelector} from "react-redux";
import {RED_SHIRT} from "../../../redux/types";
import shirtBlue from '../../../assets/image/backB.png'
import shirtRed from '../../../assets/image/backR.png'

interface Props {
    card: Card[]
}

function Computer(props: Props) {
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)
    const cards: ReactNode[] = [];

    for (let i = props.card.length; 0 < i; i--) {
        if (color === RED_SHIRT) cards.push((<img src={shirtRed} key={i} alt=""/>));
        else cards.push((<img src={shirtBlue} key={i} alt=""/>));
    }

    return (
        <div className="Computer">
            {cards}
        </div>
    );
}

export default Computer;
