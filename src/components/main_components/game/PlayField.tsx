import React from 'react';
import '../../../styles/main/game/PlayField.scss';
import {Card} from "../../../assets/image/card/images";
import shirtBlue from '../../../assets/image/backB.png'
import shirtRed from '../../../assets/image/backR.png'
import {useSelector} from "react-redux";
import {RED_SHIRT} from "../../../redux/types";

interface Props {
    suit: Card,
    card: Card[]
}

function PlayField(props: Props) {
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)

    return (
        <div className='PlayField'>
            <div className='set'>
                <img className='suit' src={props.suit.img} alt={props.suit.weight + props.suit.suit}/>
                <div>
                    {
                        color === RED_SHIRT ? (
                            <img src={shirtRed} alt=""/>
                        ) : (
                            <img src={shirtBlue} alt=""/>)
                    }
                    <h2>{props.card.length + 1}</h2>
                </div>
            </div>
            <div className='Field'></div>
            <div className='bit'></div>
        </div>
    );
}

export default PlayField;
