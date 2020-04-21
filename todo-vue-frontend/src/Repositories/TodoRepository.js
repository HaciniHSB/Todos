import axios from "../axios";

export async function  getAllTodos(){
 return await  axios
        .get("/todo/todos")
        .then((response) => {
             return  response.data;
        })
        .catch((error) => {
          console.log(error);
         
        });
}


export async function  ValidateTodo(todo){
  await axios
        .put("/todo/ValidateTodo",todo)
        .catch(function(error) {
          console.log(error);
        });
 }