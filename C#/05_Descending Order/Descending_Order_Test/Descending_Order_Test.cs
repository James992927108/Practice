using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Descending_Order_Test
{
    [TestClass]
    public class Descending_Order_Test
    {
        private static void GetValue(long actual_Input, long expect_Input)
        {
            var Descending_Order_Input = new Kata();
            var expect = expect_Input;
            var actual = Descending_Order_Input.DescendingOrder(actual_Input);
            Assert.AreEqual(expect, actual);
        }
        [TestMethod]
        public void input_0_should_return_0()
        {
            GetValue(0, 0);
        }
        [TestMethod]
        public void input_21445_should_return_54421()
        {
            GetValue(21445, 54421);
        }
        [TestMethod]
        public void input_145263_should_return_654321()
        {
            GetValue(145263, 654321);
        }
        [TestMethod]
        public void input_1254859723_should_return_9875543221()
        {
            GetValue(1254859723, 9875543221);
        }
    }

    public class Kata
    {
        public long DescendingOrder(long actual_Input)
        {
            long AfterSortLong = 0;
            string AfterSortString = "";
            int[] arrayList = actual_Input.ToString().Select(o => Convert.ToInt32(o-48)).ToArray();
            Array.Sort(arrayList);
            Array.Reverse(arrayList);
            for (int i = 0; i < arrayList.Length; i++)
            {
                AfterSortString += arrayList[i].ToString();
            }
            AfterSortLong = Convert.ToInt64(AfterSortString);
            return AfterSortLong;
        }
    }
    //public static class Kata
    //{
    //    public static int DescendingOrder(int num)
    //    {
    //        return int.Parse(string.Concat(num.ToString().OrderByDescending(x => x)));
    //    }
    //}
}
