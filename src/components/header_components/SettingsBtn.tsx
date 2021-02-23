import React from 'react';
import '../../styles/header/Settings.scss';
import {useDispatch, useSelector} from "react-redux";
import {hideSetting, showSetting} from "../../redux/actions/settingActions";
import {stopGame} from "../../redux/actions/gameActions";

export default function SettingsBtn() {
    const dispatch = useDispatch()
    // @ts-ignore
    const isOpen = useSelector(state => state.setting.isOpen);
    // @ts-ignore
    const isStart = useSelector(state => state.game.isStart);

    if (isStart) {
        return (
            <button type="button" className="btn btn-danger" onClick={() => dispatch(stopGame())}>
                <i className="bi bi-stop-circle"/>&nbsp;&nbsp;Stop&nbsp;&nbsp;&nbsp;
            </button>
        )
    }

    if (isOpen) {
        return (
            <button type="button" className="btn btn-success" onClick={() => dispatch(hideSetting())}>
                <i className="bi bi-check-circle"/>&nbsp;&nbsp;&nbsp;Ok!&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
        )
    }

    return (
        <button type="button" className="btn btn-dark" onClick={() => dispatch(showSetting())}><i className="bi bi-gear"/>&nbsp;Setting
        </button>
    );
}
