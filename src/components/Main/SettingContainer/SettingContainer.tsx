import React from 'react';
import './SettingContainer.scss';
import {useSelector} from "react-redux";
import Setting from "../Setting/Setting";

function SettingContainer() {
    // @ts-ignore
    const isOpen = useSelector(state => state.setting.isOpen);

    return (
        <div className={isOpen ? 'SettingContainer isOpen' : 'SettingContainer'}>
            {isOpen ? <Setting/> : null}
        </div>
    );
}

export default SettingContainer;
