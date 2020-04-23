import { createStore, applyMiddleware } from "redux";
import todoApp from "./Reducers";
import thunk from "redux-thunk";



export default createStore(
  todoApp,
  applyMiddleware(thunk)
);
