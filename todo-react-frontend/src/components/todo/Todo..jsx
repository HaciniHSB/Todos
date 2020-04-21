import React from "react";
import "./todo.css";

export default class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: {
        Name: this.props.todo.Name,
        Creation_Date: this.props.todo.Creation_Date,
        Updated_Date: this.props.todo.Updated_Date,
        State: this.props.todo.State,
      },
      todoStyle:
        this.state.todo.state === 1
          ? "alert alert-success"
          : "alert alert-warning",
    };
  }

  getSateCompenent = () => {
    if (this.state.props.State === 1) {
      return (
        <span className="badge badge-pill badge-success floatrigth">Done</span>
      );
    } else if (this.state.todo.State === 0) {
      return (
        <span className="badge badge-pill badge-warning floatrigth">
          Waiting
        </span>
      );
    }
  };

  render() {
    return (
      <div className={this.state.todoStyle} onClick="" role="alert" id="Todo">
        <div id="left">
          <h6>{this.state.todo.Name}</h6>
        </div>
        <div id="rigth">
          <getSateCompenent />
          <font-awesome-icon
            id="delete"
            icon="trash-alt"
            onClick="DeleteTtoto"
          />
        </div>
        <div style="clear: both"></div>
      </div>
    );
  }
}
