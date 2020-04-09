using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PoldyCvUI.Models
{
    public class ApplyListViewModel
    {
        public int ApplyId { get; set; }
        public int PersonId { get; set; }
        public int TitleId { get; set; }
        public int DepartmentId { get; set; }
        public int JobAdvertisementId { get; set; }
        [Required]
        public string Detail { get; set; }
        public byte[]Pdf { get; set; }
    }
}
