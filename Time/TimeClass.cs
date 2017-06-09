using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeFunction
{
    public class TimeClass
    {
        public string GetNowString()
        {
            return DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss fff");
        }
    }
}
