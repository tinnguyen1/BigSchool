using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace BigSchool.ViewModels
{
    public class FutureDate : validationAttribute
    {     
        public override bool IsValid(object value)
        {
            DateTime dateTime;
            var isValid = DateTime.TryParseExact(Convert.ToString(value), "dd/MM/yyy", CultureInfo.CurrentCulture, DateTimeStyles.None, out dateTime);

            return (isValid && dateTime > DateTime.Now);
        }
        
    }
}