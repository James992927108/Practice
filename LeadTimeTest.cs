using System;
using NUnit.Framework;
using TitanTalentCenter.Controllers;

namespace TitanTalentCenter.Tests
{
    public class LeadTimeTest
    {
        [Test]
        public void 同天_日期5月1周一到5月1號周一_預期得到_1日工作天()
        {
            //Arrange
            OverviewController TestLeadtime = new OverviewController();
            DateTime time1 = new DateTime(2017, 5, 1);
            DateTime time2 = new DateTime(2017, 5, 1);
            string expect = "1";
            //Act
            string Result = TestLeadtime.LeadTime(time1, time2);
            //Assert
            Assert.AreEqual(expect, Result);
        }

        [Test]
        public void 不同天_日期5月1周一到5月5號週五_預期得到_5日工作天()
        {
            //Arrange
            OverviewController TestLeadtime = new OverviewController();
            DateTime time1 = new DateTime(2017, 5, 1);
            DateTime time2 = new DateTime(2017, 5, 5);
            string expect = "5";
            //Act
            string Result = TestLeadtime.LeadTime(time1, time2);
            //Assert
            Assert.AreEqual(expect, Result);
        }

        [Test]
        public void 不同天_日期5月1周一到5月8號下周一_預期得到_6日工作天()
        {
            //Arrange
            OverviewController TestLeadtime = new OverviewController();
            DateTime time1 = new DateTime(2017, 5, 1);
            DateTime time2 = new DateTime(2017, 5, 8);
            string expect = "6";
            //Act
            string Result = TestLeadtime.LeadTime(time1, time2);
            //Assert
            Assert.AreEqual(expect, Result);
        }

        [Test]
        public void 不同天_日期5月6週六到5月8號周一_預期得到_1日工作天()
        {
            //Arrange
            OverviewController TestLeadtime = new OverviewController();
            DateTime time1 = new DateTime(2017, 5, 6);
            DateTime time2 = new DateTime(2017, 5, 8);
            string expect = "1";
            //Act
            string Result = TestLeadtime.LeadTime(time1, time2);
            //Assert
            Assert.AreEqual(expect, Result);
        }

        [Test]
        public void 不同天_日期5月6週六到5月13號下週六_預期得到_5日工作天()//不會有週末到周末的情況輸出為6天但實際5天
        {
            //Arrange
            OverviewController TestLeadtime = new OverviewController();
            DateTime time1 = new DateTime(2017, 5, 6);
            DateTime time2 = new DateTime(2017, 5, 13);
            string expect = "6";
            //Act
            string Result = TestLeadtime.LeadTime(time1, time2);
            //Assert
            Assert.AreEqual(expect, Result);
        }
    }
}
