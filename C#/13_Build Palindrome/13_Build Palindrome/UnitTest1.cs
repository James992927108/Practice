using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _13_Build_Palindrome
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var kata = new Kata();
            Assert.AreEqual("abcdcba", kata.buildPalindrome("abcdc"));
        }
        [TestMethod]
        public void TestMethod2()
        {
            var kata = new Kata();
            Assert.AreEqual("abababa", kata.buildPalindrome("ababab"));
        }
    }

    public class Kata
    {
        public string buildPalindrome(string st)
        {
            var i = 0;
            while (!st.Substring(i).ToArray().SequenceEqual(st.Substring(i).Reverse().ToArray()) && i < st.Length)
                i++;
            st = st + new string(st.Substring(0, i).Reverse().ToArray());
            return st;
        }
    }
}
