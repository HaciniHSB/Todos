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
    });
}
//Add New Todo
export async function PostTodo(todo) {
  if (todo.Name !== undefined && todo.Name !== null && todo.Name.lenght > 0) {
    await axios
      .post("/todo/todo", {
        Name: todo.Name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => console.log("OK"));
  }
}
//Validate Todo
export async function ValidateTodo(todo) {
  await axios.put("/todo/ValidateTodo", todo).catch(function (error) {
    console.log(error);
  });
}

//Delete Todo
export async function DeleteTodo(todo) {
  await axios
    .delete("/todo/DeleteTodo/" + todo.id)
    .then(() => {
        // Run redux to refresh all todos
    })
    .catch(function (error) {
      console.log(error);
    });
}
