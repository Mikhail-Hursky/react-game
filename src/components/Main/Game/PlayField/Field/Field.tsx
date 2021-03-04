import React from "react";
import "./Field.scss";
import { connect } from "react-redux";
import GameTable from "../GameTable/GameTable";
interface Props {
  isMoveUser: boolean;
}

function Field(props: Props) {
  return (
    <div className="Field">
      <p>{props.isMoveUser ? "Ваш ход" : "Ход противника"}</p>
      <GameTable />
    </div>
  );
}

//@ts-ignore
const mapStateToProps = (state) => ({ isMoveUser: state.user.isMove });

export default connect(mapStateToProps)(Field);
