using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PoldyCvUI.Models;

namespace PoldyCvUI.Services
{
    public interface IAutoService
    {
        Task Register(RegisterModel registerModel);
        Task Login(LoginModel loginModel);
        Task Logout();
    }
}
