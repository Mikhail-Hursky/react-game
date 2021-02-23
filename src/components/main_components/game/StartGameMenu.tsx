import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../../../styles/main/game/StartGame.scss'
import {startGame} from "../../../redux/actions/gameActions";

function StartGameMenu() {
    const dispatch = useDispatch();
    // @ts-ignore
    const setting = useSelector(state => state.setting)
    // @ts-ignore
    const isStart = useSelector(state => state.game.isStart)

    if(isStart) return null;

    return (
        <div className="StartGame">
            <div className="card text-white bg-dark w-50">
                <div className="card-body">
                    <h5 className="card-title">Вы готовы ?</h5>
                    <p className="card-text">Количество карт: {setting.quantityCard}.</p>
                    <p className="card-text">Цвет рубашки: {setting.shirtColor}.</p>
                    <button onClick={()=> dispatch(startGame())} disabled={setting.isOpen} className="btn btn-success w-100">Start</button>
                </div>
            </div>
        </div>
    );
}

export default StartGameMenu;
