using Microsoft.AspNetCore.Components;
using PoldyCvUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PoldyCvUI.Services
{
    public class PersonService
    {
        private HttpClient _httpClient;
        public PersonService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task Add(PersonListViewModel personListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/person/add", personListViewModel);
        }

        public async Task Delete(PersonListViewModel personListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/person/delete", personListViewModel);
        }

        public Task<PersonListViewModel[]> GetList()
        {
            return _httpClient.GetJsonAsync<PersonListViewModel[]>("https://localhost:44340/api/person/getall");
        }



        public async Task Update(PersonListViewModel personListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/person/update", personListViewModel);
        }
    }
}
