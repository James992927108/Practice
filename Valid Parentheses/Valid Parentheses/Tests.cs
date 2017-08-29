using System;
using System.Linq;
using NUnit.Framework;

namespace ValidParentheses
{
    [TestFixture]
    public class Tests
    {
        [Test]
        public void SampleTest1()
        {
            Assert.AreEqual(true, Parentheses.ValidParentheses("()"));
        }

        [Test]
        public void SampleTest2()
        {
            Assert.AreEqual(false, Parentheses.ValidParentheses(")(((("));
        }
    }

    public class Parentheses
    {
        public static bool ValidParentheses(string input)
        {
            {
                string[] inputElement = input.Select(o => o.ToString()).Distinct().ToArray();
                int inputEqualLeft = input.Where(o => o.ToString() == "(").Count();
                int inputEqualRight = input.Where(o => o.ToString() == ")").Count();
                if (inputEqualLeft == inputEqualRight)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}
