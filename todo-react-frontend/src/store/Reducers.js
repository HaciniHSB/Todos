import { combineReducers } from "redux";
import { GET_TODOS } from "./Actions";


const initialState = {alltodos:[]} ;

function todos(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign({},state,{alltodos:action.result} );
    default:
      return state;
  }
}

export default combineReducers({
  todos,
});
