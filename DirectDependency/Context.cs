using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectDependency
{
    public static class Context
    {
        public static Dictionary<string, string> Profiles;

        static Context()
        {
            Profiles = new Dictionary<string, string>
            {
                {"cash", "11"},
                { "iam", "22"}
            };
            //Profiles.Add("antony", "33");
        }

        public static string GetPassword(string key)
        {
            return Profiles[key];
        }
    }
}
