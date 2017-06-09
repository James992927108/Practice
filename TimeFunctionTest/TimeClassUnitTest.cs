using System;
using TimeFunction;
using NUnit.Framework;
using NSubstitute;

namespace TimeFunctionTest
{
    public class TimeClassUnitTest
    {
        [Test]
        public void GetNowStringisRight()
        {
            var test = new TimeClass();
            string result1 = test.GetNowString();
            string expect = DateTime.Now.AddMilliseconds(-1).ToString("yyyy/MM/dd HH:mm:ss fff");
            //string expect = "2017/06/06 00:00:00 000";

            Assert.AreEqual(expect, result1);
        }
    }
}
