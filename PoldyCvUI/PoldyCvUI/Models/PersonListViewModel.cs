using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoldyCvUI.Models
{
    public class PersonListViewModel
    {
        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mail { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
        public bool Rank { get; set; }
        public bool Status { get; set; }
    }
}
