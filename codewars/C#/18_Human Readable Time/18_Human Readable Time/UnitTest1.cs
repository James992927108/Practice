using System;
using System.Runtime.InteropServices.ComTypes;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _18_Human_Readable_Time
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var actual = TimeFormat.GetReadableTime(0);
            var expect = "00:00:00";
            Assert.AreEqual(expect, actual);
        }
        [TestMethod]
        public void TestMethod2()
        {
            Assert.AreEqual("00:00:05", TimeFormat.GetReadableTime(5));
        }
        [TestMethod]
        public void TestMethod3()
        {
            Assert.AreEqual("00:01:00", TimeFormat.GetReadableTime(60));
        }
        [TestMethod]
        public void TestMethod4()
        {
            Assert.AreEqual("23:59:59", TimeFormat.GetReadableTime(86399));
        }
        [TestMethod]
        public void TestMethod5()
        {
            Assert.AreEqual("99:59:59", TimeFormat.GetReadableTime(359999));
        }
        [TestMethod]
        public void TestMethod6()
        {
            Assert.AreEqual("0:0:59", TimeFormat.GetReadableTime(59));
        }
    }
    public static class TimeFormat
    {
        public static string GetReadableTime(int seconds)
        {
            var time = string.Format("{0:d2}:{1:d2}:{2:d2}", seconds / 3600, seconds / 60 % 60, seconds % 60);
            return time;
        }
    }
    public static class TimeFormatA
    {
        public static string GetReadableTime(int seconds)
        {
            long h, m, s;
            DateTime dt;
            h = seconds / 3600;
            seconds %= 3600;
            m = seconds / 60;
            seconds %= 60;
            s = seconds / 1;
            var time = h.ToString() + ":" + m.ToString() + ":" + s.ToString();

            //if (s < 10)
            //{
            //    time = h.ToString() + ":" + m.ToString() + ":" + "0" + s.ToString();
            //}
            //if (m < 10 && s < 10)
            //{
            //    time = h.ToString() + ":" + "0" + m.ToString() + ":" + "0" + s.ToString();
            //}
            //if (h < 10 &&  m < 10 && s <10)
            //{
            //    time = "0"+h.ToString() + ":" + "0" + m.ToString() + ":" + "0" + s.ToString();
            //}

            if (h < 60 && m < 60 && s < 60)
            {
                dt = Convert.ToDateTime(time);
                time = dt.TimeOfDay.ToString();
            }
            return time;
        }
        
    }
}
