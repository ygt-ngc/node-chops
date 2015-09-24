import React from "react";

export default class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div id="tic-tac-toe">
              <div className="row row-a" id="row-a">
                <div className="cell" id="cell-a-1">
                foo-a-1
                </div>
                <div className="cell" id="cell-a-2">
                foo-a-2
                </div>
                <div className="cell" id="cell-a-3">
                foo-a-3
                </div>
              </div>
              <div className="row row-b" id="row-b">
                <div className="cell" id="cell-b-1">
                foo-b-1
                </div>
                <div className="cell" id="cell-b-2">
                foo-b-2
                </div>
                <div className="cell" id="cell-b-3">
                foo-b-3
                </div>
              </div>
              <div className="row row-c" id="row-c">
                <div className="cell" id="cell-c-1">
                foo-c-1
                </div>
                <div className="cell" id="cell-c-2">
                foo-c-2
                </div>
                <div className="cell" id="cell-c-3">
                foo-c-3
                </div>
              </div>
            </div>);
  }
};

React.render(<TicTacToe />, document.getElementById('main'));
