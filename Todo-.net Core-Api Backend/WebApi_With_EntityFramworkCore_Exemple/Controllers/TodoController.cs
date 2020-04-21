using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi_With_EntityFramworkCore_Exemple.Models;
using WebApi_With_EntityFramworkCore_Exemple.MoldelsRepository;

namespace WebApi_With_EntityFramworkCore_Exemple.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository _todoRepo;
        public TodoController(ITodoRepository todoRepo)
        {
            _todoRepo = todoRepo;
        }

        [HttpGet]
        [Route("Todos")]
        public async Task<ActionResult<IEnumerable<Todo>>> Todos()
        {
            return Ok(await _todoRepo.GetTodos());
        }


        [HttpPost]
        [Route("Todo")]
        public async Task<ActionResult> Todo(Todo todo)
        {
            try
            {
                if (todo != null)
                {
                    await _todoRepo.AddTodo(new Todo { Name = todo.Name, Creation_Date = DateTime.Now, State = 0 });
                    return Ok();
                }
                return NoContent();
            }
            catch (Exception e)
            {

                return Problem(e.Message);
            }
        }



        [HttpPut]
        [Route("ValidateTodo")]
        public async Task<ActionResult> ValidateTodo(Todo todo)
        {
            try
            {
                if (todo != null )
                {
                    await _todoRepo.ValidateTodo(todo);
                    return Ok();
                }
                return NoContent();
            }
            catch (Exception e)
            {

                return Problem(e.Message);
            }
        }

        [HttpDelete]
        [Route("DeleteTodo/{id}")]
        public async Task<ActionResult> DeleteTodo(int id)
        {
            try
            {
                if (id > 0)
                {
                    await _todoRepo.DeleteTodo(id);
                    return Ok();
                }
                return NoContent();
            }
            catch (Exception e)
            {

                return Problem(e.Message);
            }
        }

    }
}