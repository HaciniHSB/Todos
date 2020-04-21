using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi_With_EntityFramworkCore_Exemple.Models;

namespace WebApi_With_EntityFramworkCore_Exemple.MoldelsRepository
{
    public interface ITodoRepository
    {
        Task<IEnumerable<Todo>> GetTodos();
        Task  AddTodo(Todo todo);
        Task ValidateTodo(Todo todo);
        Task DeleteTodo(int id);
    }
}
