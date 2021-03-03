import React from 'react';
import './Header.scss'
import Logo from './Logo/Logo';
import Radio from './Radio/Radio';
import SettingsBtn from "./SettingBtn/SettingsBtn";
import Tittle from './Tittle/Tittle';


export default () => {
    return (
        <header className="Header">
            <Logo/>
            <Tittle/>
            <SettingsBtn/>
        </header>
    );
}
