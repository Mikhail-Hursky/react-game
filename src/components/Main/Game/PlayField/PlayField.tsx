import React from 'react';
import './PlayField.scss';
import {useSelector} from "react-redux";
import CardsKit from './CardsKit/CardsKit';
import Field from "./Field/Field";
import Bit from './Bit/Bit';

function PlayField() {
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)

    return (
        <div className='PlayField'>
            <CardsKit />
            <Field />
        </div>
    );
}

export default PlayField;
