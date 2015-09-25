import React from "react";
import classNames from "classnames";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this._setCellPlayed.bind(this);
  }

  _setCellPlayed() {
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
           onClick={this._setCellPlayed}>
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
        <Cell row={this.props.row} col="1" markedByPlayer={this.props.rowPlays[0]} onCellPlayed={this.props.onCellPlayed} />
        <Cell row={this.props.row} col="2" markedByPlayer={this.props.rowPlays[1]} onCellPlayed={this.props.onCellPlayed} />
        <Cell row={this.props.row} col="3" markedByPlayer={this.props.rowPlays[2]} onCellPlayed={this.props.onCellPlayed} />
      </div>
    );
  }
}

export default class TicTacToe extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPlayer: 1,
      board: {
        a: [null, null, null],
        b: [null, null, null],
        c: [null, null, null]
      },
    };

    this.playCell.bind(this);
  }

  playCell(row, col) {
    var cell = this.state.board[row][parseInt(col) - 1];

    if (cell == null) {
      cell = this.state.currentPlayer;
      this.state.currentPlayer = this.state.currentPlayer == 1 ? 2 : 1;
    }
  }

  render() {
    return (<div id="tic-tac-toe">
              <h1>Player {this.state.currentPlayer}</h1>
              <Row onCellPlayed={this.playCell} rowPlays={this.state.board['a']} row="a" />
              <Row onCellPlayed={this.playCell} rowPlays={this.state.board['b']} row="b" />
              <Row onCellPlayed={this.playCell} rowPlays={this.state.board['c']} row="c" />
            </div>);
  }
};

React.render(<TicTacToe />, document.getElementById('main'));
