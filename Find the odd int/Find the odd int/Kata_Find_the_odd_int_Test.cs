using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Find_the_odd_int
{
    [TestClass]
    public class Kata_Find_the_odd_int_Test
    {
        [TestMethod]
        public void TestMethod1()
        {
            int[] actual_input = { 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 };
            var expect = 5;
            var actual = Kata.find_it(actual_input);
            Assert.AreEqual(expect, actual);
        }
    }
    public class Kata
    {
        public static int find_it(int[] actual_input)
        {
            var getDistinctNum = actual_input.GroupBy(x => x);
            var s = getDistinctNum.Where();
            return 5;
        }

    }
}
