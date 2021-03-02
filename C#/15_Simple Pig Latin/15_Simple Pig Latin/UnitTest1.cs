using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _15_Simple_Pig_Latin
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void KataTests1()
        {
            Assert.AreEqual("igPay atinlay siay oolcay", Kata.PigIt("Pig latin is cool"));
        }
        [TestMethod]
        public void KataTests2()
        {
            Assert.AreEqual("hisTay siay ymay tringsay", Kata.PigIt("This is my string"));
        }
    }
    public class Kata
    {
        public static string PigIt(string str)
        {
            //string[] strArray = str.Split(' ').Select(o => o).ToArray();
            //for (int i = 0; i < strArray.Length; i++)
            //{
            //    char getFirstWord = strArray[i].Select(o => o).First();
            //    strArray[i] = strArray[i].Substring(1, strArray[i].Length - 1) + getFirstWord + "ay";
            //    if (i == 0)
            //    {
            //        str = string.Concat(strArray[i], " ");
            //    }
            //    else
            //    {
            //        str = str + string.Concat(strArray[i], " ");
            //    }
            //}
            //str = str.Substring(0, str.Length - 1);
            string[] strArray = str.Split(' ').Select(o => o).ToArray();
            for (int i = 0; i < strArray.Length; i++)
            {
                strArray[i] = strArray[i].Substring(1, strArray[i].Length - 1) + strArray[i].Select(o => o).First() + "ay";
                if (i == 0)
                    str = string.Concat(strArray[i], " ");
                else
                    str = str + string.Concat(strArray[i], " ");
            }
            return str.Substring(0, str.Length - 1);
        }
    }
}
