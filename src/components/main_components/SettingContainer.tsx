import React from 'react';
import '../../styles/main/Setting.scss';
import {useSelector} from "react-redux";
import Setting from "./Setting";

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
