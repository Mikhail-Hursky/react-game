import React from 'react';
import '../../styles/header/Header.scss'
import Logo from "./Logo";
import SettingsBtn from "./SettingsBtn";
import Tittle from "./Tittle";

export default () => {
    return (
        <header className="Header">
            <Logo/>
            <Tittle/>
            <SettingsBtn/>
        </header>
    );
}
