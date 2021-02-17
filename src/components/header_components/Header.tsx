import React from 'react';
import '../../styles/header/Header.scss'
import Logo from "./Logo";
import Settings from "./Settings";
import Tittle from "./Tittle";

export default class Header extends React.Component {
    render() {
        return <header className="Header">
            <Logo />
            <Tittle />
            <Settings />
        </header>;
    }
}
