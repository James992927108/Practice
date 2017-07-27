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
        public static int find_it_1(int[] actual_input)
        {
            var getDistinctNumAndCount =
                from p in actual_input
                group p by p.ToString() into g
                select new
                {
                    g.Key,
                    DistinctNum = g.Count()
                };
            var getDistinctNum = from x in getDistinctNumAndCount
                    where x.DistinctNum%2 == 1
                    select new
                    {
                        x.Key
                    };
            string abc = "";
            foreach (var a in getDistinctNum)
            {
                abc = a.Key;
            }
            int Num = Convert.ToInt32(abc);
            return Num;
        }
        public static int find_it(int[] actual_input)
        {
            var getDistinctNumAndCount = actual_input.GroupBy(x => x).Where(x=>x.Count()%2==1).Select(x=>x.Key).FirstOrDefault();
            return getDistinctNumAndCount;
        }
        public static int find_it_solution(int[] seq)
        {
            return seq.GroupBy(x => x).Single(g => g.Count() % 2 == 1).Key;
        }
    }
}
