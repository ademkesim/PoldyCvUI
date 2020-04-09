using PoldyCvUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoldyCvUI.Services
{
    public interface INotificationService
    {
        Task Add(NotificationListViewModel notificationListViewModel);
        Task Delete(NotificationListViewModel notificationListViewModel);
        Task Update(NotificationListViewModel notificationListViewModel);
    }
}
