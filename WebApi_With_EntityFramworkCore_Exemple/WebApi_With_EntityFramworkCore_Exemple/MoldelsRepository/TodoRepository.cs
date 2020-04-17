using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebApi_With_EntityFramworkCore_Exemple.Models;

namespace WebApi_With_EntityFramworkCore_Exemple.MoldelsRepository
{
    public class TodoRepository : ITodoRepository
    {
        private readonly IConfiguration _config;
        public TodoRepository(IConfiguration config)
        {
            _config = config;
        }
        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("TestDatabase"));
            }
        }
        public async Task<IEnumerable<Todo>> GetTodos()
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "SELECT Id,Name,Creation_Date,Updated_Date,State FROM Todo";
                conn.Open();
                var  result = await conn.QueryAsync<Todo>(sQuery);
                return result;
            }
        }

        public async Task AddTodo(Todo todo)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "INSERT INTO Todo (Name,Creation_Date,Updated_Date,State) VALUES ( @Name,@Creation_Date,@Updated_Date,@State)";
                conn.Open();
                await conn.QueryAsync(sQuery, new { todo.Name, todo.Creation_Date, todo.Updated_Date, todo.State });
            }
        }

        public async Task ValidateTodo(Todo todo)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "UPDATE Todo SET Updated_Date=@Updated_Date, State=@State WHERE Id =@Id ";
                conn.Open();
                await conn.QueryAsync(sQuery, new { Updated_Date = DateTime.Now, State = todo.State==0?1:0, Id = todo.Id });

            }
        }

        public async Task DeleteTodo(int id)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "DELETE FROM Todo WHERE Id =@Id ";
                conn.Open();
                await conn.QueryAsync(sQuery, new { Id = id });

            }
        }
    }
}
