import React from "react";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTodo, validateTodo } from "../../store/Actions";

class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: {
        id: props.todo.id,
        name: props.todo.name,
        creation_Date: props.todo.creation_Date,
        updated_Date: props.todo.updated_Date,
        state: props.todo.state,
      },
    };
  }

  /*static getDerivedStateFromProps(props, state) {
    if(props.todo.state !== state.todo.state){
      return {
         todo : {
          id :props.todo.id,
          name: props.todo.name,
          creation_Date: props.todo.creation_Date,
          updated_Date: props.todo.updated_Date,
          state: props.todo.state,
         }
      }
    }
    return null;
  }*/

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.todo.state !== this.props.todo.state) {
      return this.props.todo.state;
    }
    return null;
  }

  componentDidUpdate = (prevProps, prevState, newState) => {
    if (newState !== null) {
      this.setState({
        todo: Object.assign({}, this.state.todo, { state: newState }),
      });
    }
  };

  getStateCompenent = () => {
    if (this.state.todo.state === 1) {
      return (
        <span className="badge badge-pill badge-success floatrigth"> Done</span>
      );
    } else if (this.props.todo.state === 0) {
      return (
        <span className="badge badge-pill badge-warning floatrigth">
          Waiting
        </span>
      );
    }
  };

  delete = () => {
    this.props.deleteTodo(this.state.todo);
  };
  validate = () => {
    this.props.validateTodo(this.state.todo);
  };

  todoStyle = () => {
    return (this.state.todo.state ===1)?"alert alert-success":"alert alert-warning"
  };

  render() {
    return (
      <div
        className={this.todoStyle()}
        role="alert"
        id="Todo"
        onClick={this.validate}
      >
        <div id="left">
          <h6>{this.state.todo.name}</h6>
        </div>
        <div id="rigth">
          {this.getStateCompenent()}{" "}
          <FontAwesomeIcon
            className="delete"
            icon={faTrashAlt}
            onClick={this.delete}
          />
        </div>
        <div id="cb"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ deleteTodo, validateTodo }, dispatch),
});

export default connect(null, mapDispatchToProps)(Todo);
