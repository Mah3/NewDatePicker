using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewDatePicker.Models
{
    public class Student
    {
        public int StudentID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string Mobile { get; set; }
    }
}