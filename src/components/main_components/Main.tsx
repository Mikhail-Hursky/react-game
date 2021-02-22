import React from 'react';
import '../../styles/main/Main.scss'
import Game from "./game/Game";
import SettingContainer from "./SettingContainer";

export default function Main() {

    return (
        <main className="Main">
            <SettingContainer/>
            <Game/>
        </main>
    );
}
