import React from "react";
import { connect } from "react-redux";
import "./StartGameMenu.scss";
import { startGame } from "../../../../redux/actions/gameActions";
import { SettingInterface } from "../../../../redux/interfaces/SettingInterface";

interface Props {
  setting: SettingInterface;
  isStart: boolean;
  [x: string]: any;
}

function StartGameMenu(props: Props) {
  if (props.isStart) return <></>;

  return (
    <div className="StartGame">
      <div className="card text-white bg-dark w-50">
        <div className="card-body">
          <h5 className="card-title">Вы готовы ?</h5>
          <p className="card-text">
            Количество карт: {props.setting.quantityCard}.
          </p>
          <p className="card-text">Цвет рубашки: {props.setting.shirtColor}.</p>
          <button
            onClick={() => props.startGame()}
            disabled={props.setting.isOpen}
            className="btn btn-success w-100"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

// @ts-ignore
const mapStateToProps = (state) => ({
  setting: state.setting,
  isStart: state.game.isStart,
});

const mapDispatchToProps = {
  startGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGameMenu);
