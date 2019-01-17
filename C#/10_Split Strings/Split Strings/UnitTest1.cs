using NUnit.Framework;
using System;
using System.Linq;


namespace Split_Strings
{
    public class UnitTest1
    {
        [Test]
        public void TestMethod1()
        {
            var expect = new string[] { "ab", "c_" };
            var actual = SplitString.Solution("abc");
            Assert.AreEqual(expect, actual);
        }
        [Test]
        public void TestMethod2()
        {
            Assert.AreEqual(new string[] { "ab", "cd", "ef" }, SplitString.Solution("abcdef"));
        }
    }
    public class SplitString
    {
        public static string[] Solution(string str)
        {
            if (str.Length % 2 == 1)
            {
                str = str + "_";
            }
            string[] strToArray = str.Select(o =>o.ToString()).ToArray();
            string[] GetSplitString = new string[strToArray.Length / 2];
            int j = 0;
            for (int i=0; i< strToArray.Length; i = i+2)
            { 
                GetSplitString[j] = strToArray[i] + strToArray[i + 1];
                j++;
            }
            return GetSplitString;
        }
    }
}
