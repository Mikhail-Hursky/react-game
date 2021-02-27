import React from 'react';
import '../../../../styles/main/game/Field.scss'
import {useSelector} from "react-redux";
import GameTable from "./GameTable";

function Field() {
    // @ts-ignore
    const isMoveUser = useSelector(state => state.game.isMoveUser)

    return (
        <div className="Field">
            <p>
                {
                    isMoveUser ? 'Ваш ход' : 'Ход противника'
                }
            </p>
            <GameTable />
        </div>
    );
}

export default Field;
