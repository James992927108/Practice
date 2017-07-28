using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _13_Build_Palindrome
{
    [TestClass]
    public class UnitTest1
    {
        //[TestMethod]
        public void TestMethod1()
        {
            var kata = new Kata();
            Assert.AreEqual("abcdcba", kata.BuildPalindrome("abcdc"));
        }
        [TestMethod]
        public void TestMethod2()
        {
            var kata = new Kata();
            Assert.AreEqual("abababa", kata.BuildPalindrome("ababab"));
        }
    }

    public class Kata
    {
        public string BuildPalindrome(string str)
        {
            string[] strArray = str.Select(o => o.ToString()).ToArray();
            string[] output = createPalindrome(strArray,0,str.Count()-1);
            str = String.Concat(output);
            return str;
        }

        public string[] createPalindrome(string[] str,int start,int end)
        {
            int i = 0;
            while (true)
            {
                if (start > end)
                {
                    break;
                }
                else if (str[start] == str[end])
                {
                    start++;
                    end--;
                }
                else
                {
                    str = insertNode(str,start,str[end]);
                    start++;
                }

            }
            return str;
        }

        public string[] insertNode(string[] str, int idx, string val)
        {
            return str;
        }
    }
}
