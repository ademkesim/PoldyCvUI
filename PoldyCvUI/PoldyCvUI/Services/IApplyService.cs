using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PoldyCvUI.Models;

namespace PoldyCvUI.Services
{
    public interface IApplyService
    {
        Task<ApplyListViewModel[]> GetApplies();
        Task<ApplyListViewModel[]> GetByTitle(int getbytitleId);
        Task<ApplyListViewModel[]> GetByDepartment(int getbydepartmentId);
        Task<ApplyViewModel> GetById(int getbyapplyId);
        Task Add(ApplyViewModel applyViewModel);
        Task Update(ApplyViewModel applyListViewModel);
        Task Delete(ApplyViewModel applyListViewModel);
        Task DownloadPdf(int personId);
    }
}
