import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1 className="header__title">Tic-Tac-Toe</h1>
      <div className="header__players">
        <div className="header__players__player">
          <h3>Player</h3>
          <span
            className={
              "header__players__player__symbol " +
              (props.activePlayer === "X" ? "active" : "")
            }
          >
            X
          </span>
        </div>
        <div className="header__players__player">
          <h3>Player</h3>
          <span
            className={
              "header__players__player__symbol " +
              (props.activePlayer === "O" ? "active" : "")
            }
          >
            O
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
