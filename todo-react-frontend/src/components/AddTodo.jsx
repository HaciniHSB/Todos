import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../store/Actions";



 class AddTodo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: {
        Name: "",
      },
    };
  }

  add=()=>{
    if(this.props.addTodo(this.state.todo)){
      this.setState({
        todo : Object.assign({},this.state.todo,{Name : ""})
      })
    }

  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={this.state.todo.Name}
          onChange={(e) => {
            this.setState({ todo: { Name: e.target.value } });
          }}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="button-addon2" onClick={this.add}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({addTodo }, dispatch),
});
export default connect(null, mapDispatchToProps) (AddTodo);
