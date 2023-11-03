function Board(props) {
  function handleSelect(row, col) {
    if (props.board[row][col] === null) {
      props.handleSelect(row, col);
    }
  }
  return (
    <ul className="board">
      {props.board.map((row, rowIndex) => {
        return (
          <li key={rowIndex} className="board__row">
            <ul className="board__row__inner">
              {row.map((symbol, colIndex) => (
                <li
                  key={colIndex}
                  className={
                    "board__row__col" +
                    (props.board[rowIndex][colIndex] !== null ? " active" : " a")
                  }
                  onClick={() => handleSelect(rowIndex, colIndex)}
                >
                  {symbol}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
      {(props.winner || props.draw) && (
        <div className="board__results">
          <h2>{props.winner ? props.winner + " WON!" : "IT'S A DRAW!"}</h2>
          <button className="board__results__action" onClick={props.reset}>
            Retry ?
          </button>
        </div>
      )}
    </ul>
  );
}

export default Board;
