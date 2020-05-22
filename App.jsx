import React from "react";
import "./App.css";
//import AddTodo from "./components/AddTodo";
import Todo from "./components/todo/Todo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos } from "./store/Actions";
import Gridux from "./components/Gridux/gridux";
import getData from "./components/Gridux/FakeData";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      myTodods: [],
    };

    //props.getTodos();
  }

  getTodoList = () => {
    return this.props.todos.alltodos.length > 0
      ? this.props.todos.alltodos.map((todo) => (
          <div key={todo.id}>
            <Todo todo={todo} />
          </div>
        ))
      : null;
  };
  onRowSelected(rows) {
    //console.log(rows)
  }
  render() {
    return (
      <div id="App" className="container-fluid">
        <h1>Todo's Managers </h1>

        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <Gridux
              data={getData()}
              onRowsSelected = {this.onRowSelected}
              columns={[
                {
                  title: "birthDay",
                  name: "birthDay",
                  rowspan: 1,
                  colspan: 1,
                  row :0,
                  filtring : true,
                  sorting : true,
                  classname :"colHeader"
                },
                {
                  title: "lastName",
                  name: "lastName",
                  rowspan: 1,
                  colspan: 1,
                  row :0,
                  filtring : true,
                  sorting : true,
                  classname :"colHeader"
                }
              ]}
            />
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-5">{this.getTodoList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getTodos }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
