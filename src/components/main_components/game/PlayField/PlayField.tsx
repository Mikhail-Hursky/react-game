import React from 'react';
import '../../../../styles/main/game/PlayField.scss';
import {useSelector} from "react-redux";
import CardsKit from './CardsKit';
import Field from "./Field";
import Bit from './Bit';

function PlayField() {
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)

    return (
        <div className='PlayField'>
            <CardsKit />
            <Field />
            <Bit />
        </div>
    );
}

export default PlayField;
