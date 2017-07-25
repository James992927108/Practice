using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Persistent_Bugger
{
    [TestClass]
    public class UnitTest1
    {
        private static void GetValue(int expect_input,int actual_input)
        {
            Assert.AreEqual(expect_input, Persist.Persistence(actual_input));
        }

        [TestMethod]
        public void TestMethod1()
        {
            GetValue(3, 39);
        }
        [TestMethod]
        public void TestMethod2()
        {
            GetValue(0, 4);
        }
        [TestMethod]
        public void TestMethod3()
        {
            GetValue(2, 25);
        }
        [TestMethod]
        public void TestMethod4()
        {
            GetValue(4, 999);
        }
    }

    public class Persist
    {
        //private int num = 0;
        //public int Persistence(long actual_input)
        //{
        //    string input = actual_input.ToString();
        //    int[] eachNum = input.Select(o => Convert.ToInt32(o.ToString())).ToArray();
        //    if (eachNum.Count() != 1)
        //    {
        //        for (int i = 0; i < eachNum.Length - 1; i++)
        //        {
        //            eachNum[0] = eachNum[0] * eachNum[i + 1];
        //        }
        //        num++;
        //        Persistence(eachNum[0]);
        //    }
        //    rern num;
        //}
        public static int Persistence(long actual_input)
        {
            string input = actual_input.ToString();
            int[] eachNum = input.Select(o => Convert.ToInt32(o.ToString())).ToArray();
            int num=0;
            while (eachNum.Count() != 1)
            {
                for (int i = 0; i < eachNum.Length - 1; i++)
                {
                    eachNum[0] = eachNum[0] * eachNum[i + 1];
                }
                input = eachNum[0].ToString();
                eachNum = input.Select(o => Convert.ToInt32(o.ToString())).ToArray();
                num++;
            }       
            return num;
        }
    }
}
