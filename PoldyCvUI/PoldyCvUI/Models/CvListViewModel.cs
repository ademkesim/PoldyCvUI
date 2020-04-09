using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoldyCvUI.Models
{
    public class CvListViewModel
    {
        public int CurriculumVitaeId { get; set; }
        public int PersonID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string PlaceOfBirth { get; set; }
        public bool MaritalStatus { get; set; }
        public string EducationStatus { get; set; }
        public string School { get; set; }
        public DateTime SchoolStart { get; set; }
        public DateTime SchoolFinish { get; set; }
        public string Address { get; set; }
        public int MobilTelefonNumber { get; set; }
        public string Mail { get; set; }
        public string ForeignLanguage { get; set; }
        public string ForeignLanguageLevel { get; set; }
        public string Competences { get; set; }
        public string Reference { get; set; }
        public byte[] CvPdf { get; set; }
    }
}
