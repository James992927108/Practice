using System;
using System.Collections;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace _17_Weight_for_weight
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Test1()
        {
            Assert.AreEqual("2000 103 123 4444 99", WeightSort.orderWeight("103 123 4444 99 2000"));
        }
        [TestMethod]
        public void Test2()
        {
            Assert.AreEqual("11 11 2000 10003 22 123 1234000 44444444 9999", WeightSort.orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
        }

        [TestMethod]
        public void Test3()
        {
            Assert.AreEqual("18 180 1801 181", WeightSort.orderWeight("181 18 180 1801"));
        }

        [TestMethod]
        public void Test4()
        {
            Assert.AreEqual("1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 964 67407", WeightSort.orderWeight("1 200 2 4 4 6 6 7 7 27 72 18 81 9 91 425 31064 7920 67407 964"));
        }
    }
    public class WeightSort
    {
        public static string orderWeight(string str)
        {
            string[] strToArray = str.Split(' ').Select(o => o).ToArray();
            int[] CalculateWeight = new int[strToArray.Length];
            for (int i = 0; i < strToArray.Length; i++)
            {
                CalculateWeight[i] = strToArray[i].Select(o => Convert.ToInt32(o - 48)).ToArray().Sum();
            }
            UseBubbleSortByWeight(CalculateWeight, strToArray);
            GetValue(strToArray, CalculateWeight);

            return string.Join(" ", strToArray);
        }

        private static void GetValue(string[] strToArray, int[] CalculateWeight)
        {
            for (int k = 0; k < strToArray.Length - 1; k++)
            {
                for (int i = 0; i < strToArray.Length - 1; i++)
                {
                    if (CalculateWeight[i] == CalculateWeight[i + 1])
                    {
                        string getSubstring1 = strToArray[i]
                            .Substring(0, Math.Min(strToArray[i].Length, strToArray[i + 1].Length));
                        string getSubstring2 = strToArray[i + 1]
                            .Substring(0, Math.Min(strToArray[i].Length, strToArray[i + 1].Length));
                        if (getSubstring1 == getSubstring2)
                        {
                            if (strToArray[i + 1].Length < strToArray[i].Length)
                            {
                                Swap(strToArray, i);
                                break;
                            }
                        }
                        else
                        {
                            string[] a = strToArray[i].Select(o => o.ToString()).ToArray();
                            string[] b = strToArray[i + 1].Select(o => o.ToString()).ToArray();

                            for (int j = 0; j < Math.Max(strToArray[i].Length, strToArray[i + 1].Length); j++)
                            {
                                if (a[j] != b[j])
                                {
                                    if (Int32.Parse(a[j]) > Int32.Parse(b[j]))
                                    {
                                        Swap(strToArray, i);
                                        break;
                                    }
                                    else
                                    {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        private static void Swap(string[] getstr, int i)
        {
            string temp = getstr[i];
            getstr[i] = getstr[i + 1];
            getstr[i + 1] = temp;
        }

        public static void UseBubbleSortByWeight(int[] list, string[] getstr)
        {
            int Flag = 1;
            for (int i = 1; i <= list.Length - 1 && Flag == 1; i++)
            {
                Flag = 0;
                for (int j = 1; j <= list.Length - i; j++)
                {
                    if (list[j] < list[j - 1])
                    {
                        int temp = list[j];
                        list[j] = list[j - 1];
                        list[j - 1] = temp;

                        string temp2 = getstr[j];
                        getstr[j] = getstr[j - 1];
                        getstr[j - 1] = temp2;

                        Flag = 1;
                    }
                }
            }
        }
    }


}
