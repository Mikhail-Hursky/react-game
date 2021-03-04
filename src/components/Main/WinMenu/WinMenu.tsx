import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./WinMenu.scss";
import { startGame } from "../../../redux/actions/gameActions";

interface Props {
  whoWin: string;
  [x: string]: any;
}

function WinMenu(props: Props) {
  const dispatch = useDispatch();
  //@ts-ignore
  const isOpen = useSelector((state) => state.setting.isOpen);
  //@ts-ignore
  const color = useSelector((state) => state.setting.shirtColor);
  //@ts-ignore
  const count = useSelector((state) => state.setting.quantityCard);

  return <h5 className="WinMenu">{props.whoWin}</h5>;
}

export default WinMenu;
