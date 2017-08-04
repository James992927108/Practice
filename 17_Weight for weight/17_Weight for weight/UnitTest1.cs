using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace _17_Weight_for_weight
{
    [TestClass]
    public class UnitTest1
    {
        //[TestMethod]
        //public void Test1()
        //{
        //    Assert.AreEqual("2000 103 123 4444 99", WeightSort.orderWeight("103 123 4444 99 2000"));
        //}
        [TestMethod]
        public void Test2()
        {
            Assert.AreEqual("11 11 2000 10003 22 123 1234000 44444444 9999", WeightSort.orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
        }
    }
    public class WeightSort
    {

        public static string orderWeight(string str)
        {
            //int[] getstr = str.Split(' ').Select(o => Convert.ToInt32(o) - 48).ToArray();

            string[] getstr = str.Split(' ').Select(o => o).ToArray();
            int[] getElementSum = new int[getstr.Length];
            for (int i = 0; i < getstr.Length; i ++)
            {
                getElementSum[i] = getstr[i].Select(o => Convert.ToInt32(o - 48)).ToArray().Sum();              
            }
            bubbleSort(getElementSum, getstr);
            str = string.Join(" ", getstr);
            return str;
            // your code
        }
        public static void bubbleSort(int[] list,string[] getstr)
        {
            int n = list.Length;
            int temp;
            string temp2;
            int Flag = 1; //旗標
            int i;
            for (i = 1; i <= n - 1 && Flag == 1; i++)
            {    // 外層迴圈控制比較回數
                Flag = 0;
                for (int j = 1; j <= n - i; j++)
                {  // 內層迴圈控制每回比較次數            
                    if (list[j] < list[j - 1])
                    {  // 比較鄰近兩個物件，右邊比左邊小時就互換。	       
                        temp = list[j];
                        list[j] = list[j - 1];
                        list[j - 1] = temp;
                        temp2 = getstr[j];
                        getstr[j] = getstr[j - 1];
                        getstr[j - 1] = temp2;
                        Flag = 1;
                    }
                }
            }
        }

    }
}
