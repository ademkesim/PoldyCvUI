using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using PoldyCvUI.Models;
using Blazor.Extensions.Storage;
using Microsoft.AspNetCore.Components;

namespace PoldyCvUI.Services
{
    public class AutoService : IAutoService
    {
        private HttpClient _httpClient;
        private LocalStorage _localStorage;

        public bool IsLoggedIn { get; set; }
        public AutoService(LocalStorage localStorage, HttpClient httpClient)
        {
            _localStorage = localStorage;
            _httpClient = httpClient;
        }

        public async Task Register(RegisterModel registerModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/auth/register", registerModel);
        }

        public async Task Login(LoginModel loginModel)
        {
            var response = await _httpClient.PostJsonAsync<TokenModel>("https://localhost:44340/api/auth/login", loginModel);
            if (!string.IsNullOrEmpty(response.Token))
            {
                await _localStorage.SetItem("token", response.Token);
                IsLoggedIn = true;
            }
        }

        public async Task Logout()
        {
            await _localStorage.RemoveItem("token");
            IsLoggedIn = false;
        }
        private async Task SetAuthorizationHeader()
        {
            if (!_httpClient.DefaultRequestHeaders.Contains("Authorization"))
            {
                var token = await _localStorage.GetItem<string>("token");
                _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }
        }
    }
}
