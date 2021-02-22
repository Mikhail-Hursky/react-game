import React from 'react';
import '../../styles/header/Settings.scss';
import {useDispatch, useSelector} from "react-redux";
import {hideSetting, showSetting} from "../../redux/actions/settingActions";

export default function SettingsBtn() {
    const dispatch = useDispatch()
    // @ts-ignore
    const isOpen = useSelector(state => state.setting.isOpen);

    if (isOpen) {
        return (
            <button type="button" className="btn btn-danger" onClick={() => dispatch(hideSetting())}>
                <i className="bi bi-x-circle"/>&nbsp;Setting
            </button>
        )
    }

    return (
        <button type="button" className="btn btn-dark" onClick={() => dispatch(showSetting())}><i className="bi bi-gear"/>&nbsp;Setting
        </button>
    );
}
