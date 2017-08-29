using System;
using System.Collections.Generic;
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

        [Test]
        public void SampleTest3()
        {
            Assert.AreEqual(false, Parentheses.ValidParentheses("))()()(()()()(((()()()()(()()"));
        }

        [Test]    //左右括號一定要按照順序
        public void SampleTest4()
        {
            Assert.AreEqual(false, Parentheses.ValidParentheses(")("));
        }
    }
    
    public class Parentheses
    {
        //solution
        public static bool ValidParentheses(string input)
        {
            var open = new Stack<char>();

            foreach (var c in input)
            {
                switch (c)
                {
                    case '(':              
                        open.Push(c);
                        break;

                    case ')':  
                        if (open.Count == 0) 
                            return false; 
                        open.Pop();
                        break;
                }
            }
            
            return open.Count == 0;
        } 
        // solution
        public static bool ValidParentheses1(string input)
        {
            int counter = 0;
            foreach (char ch in input)
            {
                if (ch=='(')
                {
                    counter++;
                    continue;
                }
                if (ch==')')
                {
                    counter--;
                    if (counter<0)
                    {
                        return false;
                    }
                    continue;
                }
            }
            if (counter != 0)
            {
                return false;
            }
            return true;
        }
    }
}