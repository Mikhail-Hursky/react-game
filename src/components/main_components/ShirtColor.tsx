import React from 'react';
import {BLUE_SHIRT, RED_SHIRT} from "../../redux/types";
import {useDispatch, useSelector} from "react-redux";
import {setColorShirt} from "../../redux/actions/settingActions";

function ShirtColor() {
    const dispatch = useDispatch();
    // @ts-ignore
    const color = useSelector(state => state.setting.shirtColor)

    // @ts-ignore
    const handleCheckbox = event => dispatch(setColorShirt(event.target.value));

    return (
        <div className='col pt-1'>
            <label className='mb-0'>Цвет рубашки :</label><br/>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       type="radio"
                       name="color"
                       id={RED_SHIRT}
                       value={RED_SHIRT}
                       onChange={handleCheckbox}
                       defaultChecked={color === RED_SHIRT}/>
                <label className="form-check-label" htmlFor={RED_SHIRT}>
                    {RED_SHIRT}
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       type="radio"
                       name="color"
                       id={BLUE_SHIRT}
                       value={BLUE_SHIRT}
                       onChange={handleCheckbox}
                       defaultChecked={color === BLUE_SHIRT}/>
                <label className="form-check-label" htmlFor={BLUE_SHIRT}>
                    {BLUE_SHIRT}
                </label>
            </div>
        </div>
    );
}

export default ShirtColor;
