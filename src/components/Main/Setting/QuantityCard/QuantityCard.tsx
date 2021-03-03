import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {QUANTITY_CARD, QUANTITY_CARD24, QUANTITY_CARD36, QUANTITY_CARD52} from "../../../../redux/types";
import {setQuantityCard} from "../../../../redux/actions/settingActions";

function QuantityCard() {
    const dispatch = useDispatch();
    // @ts-ignore
    const setting = useSelector(state => state.setting.quantityCard);

    // @ts-ignore
    const handleCheckbox = event => dispatch(setQuantityCard(+event.target.value));

    const input: React.ReactNode[] = [];

    QUANTITY_CARD.forEach(i => {
        return input.push(
            <input className="form-check-input" type="radio" name="quantityCard" id="card"
                   value={i} defaultChecked={i===setting} onChange={handleCheckbox}/>
        );
    });

    return (
        <div className='form-group pt-5'>
            <label className='mb-0'>Количество карт :</label><br/>
            <div className="form-check form-check-inline">
                {input[0]}
                <label className="form-check-label" htmlFor="card">{QUANTITY_CARD24}</label>
            </div>
            <div className="form-check form-check-inline">
                {input[1]}
                <label className="form-check-label" htmlFor="card">{QUANTITY_CARD36}</label>
            </div>
            <div className="form-check form-check-inline">
                {input[2]}
                <label className="form-check-label" htmlFor="card">{QUANTITY_CARD52}</label>
            </div>
        </div>
    );
}

export default QuantityCard;
