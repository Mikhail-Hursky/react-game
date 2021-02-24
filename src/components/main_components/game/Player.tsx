import React, {ReactNode} from 'react';
import '../../../styles/main/game/Player.scss';
import {Card} from "../../../assets/image/card/images";

interface Props {
    card: Card[]
}

function Player(props: Props) {

    // @ts-ignore
    const handlerClick = event => console.log(event.target.alt)

    props.card.sort((a,b) => a.weight - b.weight);

    const cards: ReactNode[] = props.card.map((card, i) => <img onClick={handlerClick}
                                                                key={i}
                                                                src={card.img}
                                                                alt={card.weight + card.suit}/>
    );

    return (
        <div className='Player'>{cards}</div>
    );
}

export default Player;
