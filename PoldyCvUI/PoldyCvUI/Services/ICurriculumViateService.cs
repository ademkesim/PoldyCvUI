using PoldyCvUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoldyCvUI.Services
{
   public interface ICurriculumViateService
    {
        Task Add(CvListViewModel cvListViewModel,int id);
        Task Update(CvListViewModel cvListViewModel);
        Task Delete(CvListViewModel cvListViewModel);

    }
}
