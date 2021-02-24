import React, {ReactNode} from 'react';
import '../../../styles/main/game/Computer.scss';
import {Card} from "../../../assets/image/card/images";

interface Props {
    card: Card[]
}

function Computer(props: Props) {
    return (
        <div className="Computer"></div>
    );
}

export default Computer;
