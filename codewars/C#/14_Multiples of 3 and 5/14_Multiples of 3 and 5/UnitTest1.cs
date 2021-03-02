using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _14_Multiples_of_3_and_5
{
    [TestClass]
    public class UnitTest1
    {
        //[TestMethod]
        //public void intput_10_should_output_23()
        //{
        //    Assert.AreEqual(23, Kata.Solution(10));
        //}
        [TestMethod]
        public void intput_20_should_output_78()
        {
            Assert.AreEqual(78, Kata.Solution(20));
        }
    }
    public static class Kata
    {
        public static int Solution(int value)
        {
            int total = 0;
            //for (int i = 0; i < value; i++)
            //{
            //    if (i % 3 == 0 && i%5 !=0)
            //    {
            //        total = total + i;
            //    }
            //    if (i % 5 == 0 && i%3 != 0)
            //    {
            //        total = total + i;
            //    }
            //    if (i % 3 == 0 && i%5 == 0)
            //    {
            //        total = total + i;
            //    }
            //}
            int i = 0;
            while (i < value)
            {
                if (i % 3 == 0 && i % 5 != 0 || i % 5 == 0 && i % 3 != 0 || i % 3 == 0 && i % 5 == 0)
                    total += i;
                i++;
            }
            return total;
        }
    }
}
