using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_With_EntityFramworkCore_Exemple.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Creation_Date { get; set; }
        public DateTime? Updated_Date { get; set; }
        public int State { get; set; }

    }
}
