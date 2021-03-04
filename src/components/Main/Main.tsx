import React from 'react';
import './Main.scss'
import Game from "./Game/Game";
import SettingContainer from './SettingContainer/SettingContainer';


export default function Main() {

    return (
        <main className="Main">
            <SettingContainer/>
            <Game/>
        </main>
    );
}
