import React from "react";
import "./Settings.scss";
import { connect } from "react-redux";
import {
  hideSetting,
  showSetting,
} from "../../../redux/actions/settingActions";
import { stopGame } from "../../../redux/actions/gameActions";
import { cleanTable } from "../../../redux/actions/tableActions";

interface Props {
  stopGame(): void;
  cleanTable(): void;
  hideSetting(): void;
  showSetting(): void;
  isOpen: boolean;
  isStart: boolean;
}

function SettingsBtn(props: Props) {
  if (props.isStart) {
    return (
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          props.cleanTable();
          props.stopGame();
        }}
      >
        <i className="bi bi-stop-circle" />
        &nbsp;&nbsp;Стоп&nbsp;&nbsp;&nbsp;
      </button>
    );
  }

  if (props.isOpen) {
    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={() => props.hideSetting()}
      >
        <i className="bi bi-check-circle" />
        &nbsp;&nbsp;&nbsp;Ok!&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={() => props.showSetting()}
    >
      <i className="bi bi-gear" />
      &nbsp;Настройки
    </button>
  );
}

//@ts-ignore
const mapStateToProps = (state) => ({
  isStart: state.game.isStart,
  isOpen: state.setting.isOpen,
});

const mapDispatchToProps = {
  hideSetting,
  showSetting,
  stopGame,
  cleanTable,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsBtn);
