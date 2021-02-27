import React from 'react';
import {useSelector} from "react-redux";
import {RED_SHIRT} from "../../../../redux/types";
import shirtRed from "../../../../assets/image/backR.png";
import shirtBlue from "../../../../assets/image/backB.png";

function CardsKit() {
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)
    // @ts-ignore
    const cards = useSelector(state => state.game.cardsKit)
    // @ts-ignore
    const cardsSuit = useSelector(state => state.game.suit)

    return (
        <div className='Set'>
            <img className='suit' src={cardsSuit.img} alt=''/>
            <div>
                {
                    color === RED_SHIRT ? (
                        <img src={shirtRed} alt=""/>
                    ) : (
                        <img src={shirtBlue} alt=""/>)
                }
                <h2>{cards.length}</h2>
            </div>
        </div>
    );
}

export default CardsKit;
