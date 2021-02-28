import React from 'react';
import {useSelector} from "react-redux";
import {Card} from "../../../../assets/image/card/images";

function GameTable() {
    // @ts-ignore
    let cards = useSelector(state => state.game.tableCards);

    return (
        <div className="GameTable">
            {cards.length > 0 ?
                (cards.map((card: Card, index: number) => {
                        if (index % 2 !== 0) return <img className="BeatCard" key={card.img} src={card.img}/>
                        return <img key={card.img} src={card.img}/>
                    })
                ) : ''
            }
        </div>
    );
}

export default GameTable;
