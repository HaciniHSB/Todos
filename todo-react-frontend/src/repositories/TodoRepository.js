import axios from "./axios";

//Get All Todo's
export async function getAllTodos() {
  return await axios
    .get("/todo/todos")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}
//Add New Todo
export async function PostTodo(todo) {
  if (todo.Name !== undefined && todo.Name !== null) {
    return await axios
      .post("/todo/todo", {
        Name: todo.Name,
      })
      .then(() => {
        return true;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  }
}
//Validate Todo
export async function ValidateTodo(todo) {
  return await axios
    .put("/todo/ValidateTodo", todo)
    .then(() => {
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//Delete Todo
export async function DeleteTodo(todo) {
  return await axios
    .delete("/todo/DeleteTodo/" + todo.id)
    .then(() => {
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}
