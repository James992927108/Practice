using DirectDependency;
using NSubstitute;
using NUnit.Framework;

namespace DirectDependencyTest
{

    public class AuthenticationServiceLogUnitTest
    {
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
            var result = target.IsValid(account, password);

            //assert
            //Assert.IsFalse(result);
            //Assert.AreEqual("account:cash try to login failed",log.GetP());
            //log.Received(1).Save("account:cash try to login failed");
            //log.Received(1).Save(Arg.Is<string>(a => a.Contains("cash")));
        }
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
}
