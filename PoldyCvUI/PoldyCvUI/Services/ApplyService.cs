using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using PoldyCvUI.Models;

namespace PoldyCvUI.Services
{
    public class ApplyService:IApplyService
    {
        private HttpClient _httpClient;
        public ApplyService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public Task<ApplyListViewModel[]> GetApplies()
        {
            return _httpClient.GetJsonAsync<ApplyListViewModel[]>("https://localhost:44340/api/apply/getall");
        }

        public Task<ApplyListViewModel[]> GetByTitle(int getbytitleId)
        {
            return _httpClient.GetJsonAsync<ApplyListViewModel[]>("https://localhost:44340/api/apply/getbytitle?getbytitleId=" + getbytitleId);
        }

        public Task<ApplyListViewModel[]> GetByDepartment(int getbydepartmentId)
        {
            return _httpClient.GetJsonAsync<ApplyListViewModel[]>("https://localhost:44340/api/apply/getbydepartment?getbydepartmentId=" + getbydepartmentId);
        }

        public Task<ApplyViewModel> GetById(int getbyapplyId)
        {
            return _httpClient.GetJsonAsync<ApplyViewModel>("https://localhost:44340/api/apply/getbyid?getbyapplyId=" + getbyapplyId);
        }

        public async Task Add(ApplyViewModel applyViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/apply/add",applyViewModel);
        }

        public async Task Update(ApplyViewModel applyViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/apply/update", applyViewModel);
        }

        public async Task Delete(ApplyViewModel applyViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/apply/delete", applyViewModel);
        }

        public async Task DownloadPdf(int personId)
        {
            await _httpClient.GetJsonAsync<int>("https://localhost:44340/api/apply/downloadpdf?personId=" + personId);
        }
    }
}
