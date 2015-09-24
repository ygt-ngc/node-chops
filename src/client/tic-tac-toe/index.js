import React from "react";
import classNames from "classnames";

class Cell extends React.Component {
  constructor() {
    super();

    this.state = {
      markedByPlayer: null
    };
  }

  _clickedCell() {
    if (!this.state.markedByPlayer) {
      this.setState({markedByPlayer: 1});
    }
  }

  render() {
    classes = classNames('cell',
      {
        'player-one': this.state.markedByPlayer == 1,
        'player-two': this.state.markedByPlayer == 2
      });

    return (
      <div className={classes}
           id={"cell-" + this.row + "-" + this.col}
           onClick={this._clickedCell()}>
      </div>
    );
  }
}

class Row extends React.Component {
  constructor() {
    super();
    this.state = {
      owner: null
    };
  }

  render() {
    return (
      <div className={"row row-" + this.props.row} id={"row-" + this.props.row}>
        <Cell row={this.props.row} col="1" />
        <Cell row={this.props.row} col="2" />
        <Cell row={this.props.row} col="3" />
      </div>
    );
  }
}

export default class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div id="tic-tac-toe">
              <Row row="a" />
              <Row row="b" />
              <Row row="c" />
            </div>);
  }
};

React.render(<TicTacToe />, document.getElementById('main'));
