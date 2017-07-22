using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        private static void ActualAndExpect(int input_actual, int input_expect)
        {
            var input_number = new Program();
            var expect = input_expect;
            var actual = input_number.cul(input_actual);
            Assert.AreEqual(expect, actual);
        }
        [TestMethod]
        public void inputNumIs_0_Should_Output_0()
        {
            ActualAndExpect(0, 0);
        }
        [TestMethod]
        public void inputNumIs_1_Should_Output_1()
        {
            ActualAndExpect(1, 1);
        }
        [TestMethod]
        public void inputNumIs_2_Should_Output_1()
        {
            ActualAndExpect(2, 1);
        }
        [TestMethod]
        public void inputNumIs_3_Should_Output_2()
        {
            ActualAndExpect(3, 2);
        }

        [TestMethod]
        public void inputNumIs_4_Should_Output_1()
        {
            ActualAndExpect(4, 1);
        }
        [TestMethod]
        public void inputNumIs_7_Should_Output_3()
        {
            ActualAndExpect(7, 3);
        }
        [TestMethod]
        public void inputNumIs_9_Should_Output_2()
        {
            ActualAndExpect(9, 2);
        }
        [TestMethod]
        public void inputNumIs_10_Should_Output_2()
        {
            ActualAndExpect(10, 2);
        }
    }
    public class Program
    {
        public int cul(int input_actual)
        {
            int CountNum = 0;
            int[] bit = new int[31];
            
            for (int i = 30; i >0; i--)
            {
                bit[i] = input_actual % 2;
                input_actual /= 2;
            }
            for (int i = 0; i < 31; i++)
            {
                if (bit[i] == 1)
                {
                    CountNum++;
                }
            }
            return CountNum;

        }
    }
}
