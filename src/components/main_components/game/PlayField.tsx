import React from 'react';
import '../../../styles/main/game/PlayField.scss';
import {Card} from "../../../assets/image/card/images";

interface Props {
    suit:Card,
    card:Card[]
}

function PlayField(props:Props) {
    return (
        <div className='PlayField'>

        </div>
    );
}

export default PlayField;
