import React from "react";
import "./Main.scss";
import Game from "./Game/Game";
import SettingContainer from "./SettingContainer/SettingContainer";
import { cleanTable } from "../../redux/actions/tableActions";
import { stopGame } from "../../redux/actions/gameActions";
import { useSelector, useDispatch } from "react-redux";
import WinMenu from "./WinMenu/WinMenu";

export default function Main() {
  const dispatch = useDispatch();
  //@ts-ignore
  const cardsKit = useSelector((state) => state.table.cardsKit.length);
  //@ts-ignore
  const cardsComp = useSelector((state) => state.computer.cards.length);
  //@ts-ignore
  const cardsUser = useSelector((state) => state.user.cards.length);

  if (cardsComp === 0 && cardsKit === 0) {
    dispatch(cleanTable());
    dispatch(stopGame());
    return (
      <main className="Main">
        <SettingContainer />
        <WinMenu whoWin="Вы проиграли" />
        <Game />
      </main>
    );
  }
  if (cardsUser === 0 && cardsKit === 0) {
    dispatch(cleanTable());
    dispatch(stopGame());
    return (
      <main className="Main">
        <SettingContainer />
        <WinMenu whoWin="Вы выйграли поздравляю)" />
        <Game />
      </main>
    );
  }

  return (
    <main className="Main">
      <SettingContainer />
      <Game />
    </main>
  );
}
