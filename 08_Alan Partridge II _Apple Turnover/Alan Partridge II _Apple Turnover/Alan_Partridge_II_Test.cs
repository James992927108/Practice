using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Alan_Partridge_II__Apple_Turnover
{
    [TestClass]
    public class Alan_Partridge_II_Test
    {
        private static void GetValue(string expect_input, dynamic actual_input)
        {
            var expect = expect_input;
            var actual = Kata.Apple(actual_input);
            Assert.AreEqual(expect, actual);
        }
        [TestMethod]
        public void Input_50_bigger_than_1000()
        {
            GetValue("It's hotter than the sun!!", "50");
        }
        [TestMethod]
        public void Input_4_small_than_1000()
        {
            GetValue("Help yourself to a honeycomb Yorkie for the glovebox.", 4);
        }
    }
    public class Kata
    {
        public static string Apple(dynamic actual_input)
        {
            if (actual_input.GetType().Equals(typeof(string)))
            {
                actual_input = Convert.ToInt32(actual_input);
            }
            if (actual_input * actual_input >= 1000)//question is wrong,actual_input only need bigger than 37 or square of actual_input bigger than 1369
            {
                return "It's hotter than the sun!!";
            }
            else
            {
                return "Help yourself to a honeycomb Yorkie for the glovebox.";
            }
        }
    }
}
