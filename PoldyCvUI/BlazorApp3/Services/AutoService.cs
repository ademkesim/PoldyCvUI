using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using PoldyCvUI.Models;
using Blazor.Extensions.Storage;

namespace PoldyCvUI.Services
{
    public class AutoService : IAutoService
    {
        private HttpClient _httpClient;
        private LocalStorage _localStorage;
        public Task Register(RegisterModel registerModel)
        {
            throw new NotImplementedException();
        }

        public Task Login(LoginModel loginModel)
        {
            throw new NotImplementedException();
        }

        public Task Logout()
        {
            throw new NotImplementedException();
        }
    }
}
