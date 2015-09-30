import React from "react";
import Immutable from "immutable";
import classNames from "classnames";

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  setCellPlayed() {
    this.props.onCellPlayed(this.props.row, this.props.col);
  }

  render() {
    let classes = classNames('cell',
      {
        'player-one': this.props.markedByPlayer == 1,
        'player-two': this.props.markedByPlayer == 2
      });

    return (
      <div className={classes}
           id={"cell-" + this.props.row + "-" + this.props.col}
           onClick={this.setCellPlayed.bind(this)}>
      </div>
    );
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"row row-" + this.props.row} id={"row-" + this.props.row}>
        <Cell row={this.props.row} col="0" markedByPlayer={this.props.rowPlays.get(0)} onCellPlayed={this.props.onCellPlayed} />
        <Cell row={this.props.row} col="1" markedByPlayer={this.props.rowPlays.get(1)} onCellPlayed={this.props.onCellPlayed} />
        <Cell row={this.props.row} col="2" markedByPlayer={this.props.rowPlays.get(2)} onCellPlayed={this.props.onCellPlayed} />
      </div>
    );
  }
}

export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1,
      wonBy: null,
      board: Immutable.fromJS({
        a: [null, null, null],
        b: [null, null, null],
        c: [null, null, null]
      }),
    };
  }

  playCell(rowName, colNumber) {
    if (this.state.wonBy) return;

    var cell = this.state.board.get(rowName).get(colNumber);

    if (cell == null) {
      var newRow   = this.state.board
                               .get(rowName)
                               .set(colNumber, this.state.currentPlayer);

      var newBoard = this.state.board.set(rowName, newRow);

      var newState = {
        currentPlayer: this.state.currentPlayer == 1 ? 2 : 1,
        board: this.state.board.set(rowName, newRow)
      };

      if (this._whoWins(newBoard)) {
        newState['wonBy'] = this._whoWins(newBoard);
      }

      this.setState(newState);
    }
  }

  _whoWins(board) {
    var weHaveAWinner = null;

    for (let rowName of ['a', 'b', 'c']) {
      if (board.get(rowName).every(cell => cell && (cell == board.getIn(rowName, '0')))) {
        weHaveAWinner = board.getIn(rowName, '0');
      }
    }

    return weHaveAWinner;
  }

  render() {
    var rows = [];
    for (let row of ['a', 'b', 'c']) {
      rows.push(<Row onCellPlayed={this.playCell.bind(this)} rowPlays={this.state.board.get(row)} row={row} />)
    }

    return (
      <div id="tic-tac-toe">
        {
          (() => {
            if (this.state.wonBy)
              return <h1>Player {this.state.wonBy} wins!</h1>
            else
              return <h1>Player {this.state.currentPlayer}</h1>
          })()
        }
        {rows}
      </div>
    );
  }
};

React.render(<TicTacToe />, document.getElementById('main'));
