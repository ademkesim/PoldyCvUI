using Microsoft.AspNetCore.Components;
using PoldyCvUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PoldyCvUI.Services
{
    public class CurriculumViateService:ICurriculumViateService
    {
        private HttpClient _httpClient;
        public CurriculumViateService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task Add(CvListViewModel cvListViewModel,int id)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/curriculumvitae/add?id", cvListViewModel);
        }

        public async Task Delete(CvListViewModel cvListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/curriculumvitae/delete", cvListViewModel);
        }



        public async Task Update(CvListViewModel cvListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/curriculumvitae/update", cvListViewModel);
        }
    }
}
