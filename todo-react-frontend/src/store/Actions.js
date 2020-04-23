import { getAllTodos, DeleteTodo,ValidateTodo,PostTodo } from "../repositories/TodoRepository";
/*
 * Actions Types
 */

export const GET_TODOS = "GET_TODOS";


/*
 * Actions creators
 */
export function getTodos() {
  return async function (dispatch) {
    await getAllTodos().then((result) => {
      dispatch({ type: GET_TODOS, result });
    });
  };
}

export function deleteTodo(todo) {
  return async function (dispatch) {
    await DeleteTodo(todo).then( (result) => {
      if (result === true) {
        dispatch(getTodos());
      }
    });
  };
}


export function validateTodo(todo) {
    return async function (dispatch) {
      await ValidateTodo(todo).then( (result) => {
        if (result === true) {
          dispatch(getTodos());
        }
      });
    };
  }

  export function addTodo(todo) {
    return async function (dispatch) {
      return await PostTodo(todo).then( (result) => {
        if (result === true) {
          dispatch(getTodos());
          return true;
        }
      });
    };
  }
