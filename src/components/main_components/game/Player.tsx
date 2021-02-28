import React, {ReactNode} from 'react';
import '../../../styles/main/game/Player.scss';
import {Card} from "../../../assets/image/card/images";
import {useDispatch, useSelector} from "react-redux";
import {addCardPlayer, beatComputer, setCardTable, setMove} from "../../../redux/actions/gameActions";


function Player() {
    const dispatch = useDispatch()
    // @ts-ignore
    const card = useSelector(state => state.game.userCard)
    // @ts-ignore
    const isMoveUser = useSelector(state => state.game.isMoveUser)

    // @ts-ignore
    const handlerClick = event => {
        const infoCard = event.target.alt.split('_');
        const weight = +infoCard[0];
        const suit = infoCard[1];
        const index = infoCard[2];
        if (isMoveUser) {
            const removed = card.splice(index, 1);
            dispatch(addCardPlayer(card));
            dispatch(setCardTable(removed));
            dispatch(setMove(false));
        }
    }

    card.sort((a: Card, b: Card) => a.weight - b.weight);

    const cards: ReactNode[] = card.map((card: Card, i: number) => {
            return <img onClick={handlerClick}
                        key={i}
                        src={card.img}
                        alt={card.weight + '_' + card.suit + '_' + i}/>
        }
    );

    return (
        <div className='Player'>
            &lt;button&gt;&lt;/button&gt;
            {cards}
        </div>
    );
}

export default Player;
