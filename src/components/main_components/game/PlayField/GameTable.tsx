import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card} from "../../../../assets/image/card/images";
import {beatComputer, setCardsTable, setMove} from "../../../../redux/actions/gameActions";

function GameTable() {
    const dispatch = useDispatch()
    // @ts-ignore
    const card = useSelector(state => state.game.tableCard);
    // @ts-ignore
    let cards = useSelector(state => state.game.tableCards);
    console.log(card)
    if(card){
        cards.push(card)
        dispatch(setCardsTable(cards));
    }
    console.log(cards)
    return (
        <div className="GameTable">
            {cards.length>0 ?
                (cards.map((card:Card) => <img key={card.img} src={card.img}/>)
                ):''
            }
        </div>
    );
}

export default GameTable;
