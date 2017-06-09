using System;

using UnitTestClass;
using NUnit.Framework;
using DirectDependency;
using TimeFunction;
using NSubstitute;

namespace CalculatorTest
{
    public class AddTest
    {
        [Test]
        public void 傳入1和2得到結果3()
        {
            var calc = new Calculator();
            var a = 1;
            var b = 2;
            var expect = 3;

            var result = calc.Add(a, b);

            Assert.AreEqual(expect, result);
        }
        [Test]
        public void 傳入兩個浮點數()
        {
            var calc = new Calculator();
            var a = 50.1;
            var b = 70.1;
            var expect = 120.2;

            var result1 = Math.Round(calc.Add1(a, b));

            Assert.AreEqual(expect, result1);
        }

        //mock(log) 與 stub(isvaild) 之間到底差別
        [Test]
        public void IsValidRight()
        {
            var profileDao = Substitute.For<IProfileDao>();
            var rsaTokenDao = Substitute.For<IRsaTokenDao>();

            profileDao.GetPassword("").ReturnsForAnyArgs("11");
            rsaTokenDao.GetRandom("cash").Returns("1234");

            //var target = new AuthenticationServiceFake();
            var target = new AuthenticationService(profileDao, rsaTokenDao);

            var account = "cash";
            var password = "111234";
            //act
            var actul = target.IsValid(account, password);
            //assert
            Assert.IsTrue(actul);

        }
        [Test]
        public void IsNotValidShouldBeLog()
        {
            //arragne
            var profileDao = new ProfileDaoFake();
            var rsaTokenDao = new RsaTokenDaoFake();
            //var log = new LogFake();
            var log = Substitute.For<ILog>();
            var target = new AuthenticationServiceLog(profileDao, rsaTokenDao, log);
            string account = "cash";
            string password = "1112345";
            //act
            //var result = target.IsValid(account, password);
            var result = target.IsValid(account,password);

            //assert
            //Assert.IsFalse(result);
            //Assert.AreEqual("account:cash try to login failed",log.GetP());
            //log.Received(1).Save("account:cash try to login failed");
            //log.Received(1).Save(Arg.Is<string>(a => a.Contains("cash")));
        }

        //[Test]
        //public void IsValidRight1()
        //{
        //    var test = new AuthenticationServiceFake();
        //    string account = "cash";
        //    string password = "111234";
        //    bool result1 = test.IsValid(account, password);

        //    Assert.IsTrue(result1);
        //}

        //[Test]
        //public void GetNowStringisRight()
        //{
        //    var test = new TimeFake();
        //    string result1 = test.GetNowString1();
        //    string expect = DateTime.Now.AddMilliseconds(-1).ToString("yyyy/MM/dd HH:mm:ss fff");
        //    //string expect = "2017/06/06 00:00:00 000";

        //    Assert.AreEqual(expect, result1);
        //}
    }

    class ProfileDaoFake : IProfileDao, IProfile
    {
        public string GetPassword(string account)
        {
            return "11";
        }
    }

    class RsaTokenDaoFake : IRsaTokenDao, IToken
    {
        public string GetRandom(string account)
        {
            return "1234";
        }
    }

    class LogFake : ILog
    {
        private string _p;
        public void Save(string p)
        {
            this._p = p;
        }
        public string GetP()
        {
            return _p;
        }
    }

    //class AuthenticationServiceFake : AuthenticationService
    //{
    //    protected override string GetPassword(string account)
    //    {
    //        return "11";
    //    }
    //    protected override string GetRandom(string account)
    //    {
    //        return "1234";
    //    }
    //}
}
