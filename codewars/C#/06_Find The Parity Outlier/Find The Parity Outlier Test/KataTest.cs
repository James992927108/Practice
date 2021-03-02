using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Find_The_Parity_Outlier_Test
{
    [TestClass]
    public class KataTest
    {
        private static void GetValue(int[] Input_1,int expect)
        {
            var Kata_Find = new Kata();
            var actual = Kata_Find.Find(Input_1);
            Assert.IsTrue(expect == actual);
        }

        [TestMethod]
        public void Only_3_Is_Odd_and_OtherNum_Is_Even_should_output_3()
        {
            int[] Input_1 = { 2, 6, 8, -10, 3 }; 
            int expect = 3;
            GetValue(Input_1,expect);
        }

        [TestMethod]
        public void Only_1_Is_Even_and_OtherNum_Is_Odd_should_output_1()
        {
            int[] Input_1 = { 1, 2, 4, 12, 18,-20 };
            int expect = 1;
            GetValue(Input_1, expect);
        }

        [TestMethod]
        public void Only_206847684_Is_Even_and_OtherNum_Is_Odd_should_output_206847684()
        {
            int[] Input_1 = { 206847684, 1056521, 7, 17, 1901, 21104421, 7, 1, 35521, 1, 7781 };
            int expect = 206847684;
            GetValue(Input_1, expect);
        }

        [TestMethod]
        public void Only_0_Is_Odd_and_OtherNum_Is_Even_should_output_0()
        {
            int[] Input_1 = { int.MaxValue, 0, 1 };
            int expect = 0;
            GetValue(Input_1, expect);
        }
    }
    public class Kata
    {
        public int Find(int[] integers)
        {
            int GetInt = 0;
            int CheckOdd = 0;
            int CheckEven = 0;
            for (int i = 0; i < integers.Length; i++)
            {
                GetInt = integers[i];
                if (GetInt % 2 == 0)
                {
                    CheckOdd++;
                }
                else
                {
                    CheckEven++;
                }
            }
            if (CheckOdd > CheckEven)
            {
                for (int i = 0; i < integers.Length; i++)
                {
                    GetInt = integers[i];
                    if (GetInt % 2 != 0)
                    {
                        return GetInt;
                    }
                }
            }
            else
            {
                for (int i = 0; i < integers.Length; i++)
                {
                    GetInt = integers[i];
                    if (GetInt % 2 == 0)
                    {
                        return GetInt;
                    }
                }
            }
            return GetInt;
        }
    }
}
