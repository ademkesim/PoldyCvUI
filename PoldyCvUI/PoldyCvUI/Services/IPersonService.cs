using PoldyCvUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoldyCvUI.Services
{
    public interface IPersonService
    {
        Task Add(PersonListViewModel personListViewModel);
        Task Update(PersonListViewModel personListViewModel);
        Task Delete(PersonListViewModel personListViewModel);

        Task<PersonListViewModel[]> GetList();
    }
}
