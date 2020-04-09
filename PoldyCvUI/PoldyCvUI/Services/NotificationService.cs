using Microsoft.AspNetCore.Components;
using PoldyCvUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PoldyCvUI.Services
{
    public class NotificationService:INotificationService
    {
        private HttpClient _httpClient;
        public NotificationService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task Add(NotificationListViewModel notificationListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/notification/add", notificationListViewModel);
        }

        public async Task Delete(NotificationListViewModel notificationListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/notification/delete", notificationListViewModel);

        }

        public async Task Update(NotificationListViewModel notificationListViewModel)
        {
            await _httpClient.PostJsonAsync("https://localhost:44340/api/notification/update", notificationListViewModel);

        }
    }
}
