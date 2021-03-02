using DirectDependency;
using NSubstitute;
using NUnit.Framework;

namespace DirectDependencyTest
{
    public class AuthenticationServiceUnitTest
    {
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
        public void IsValidRight_1()
        {
            var test = new AuthenticationServiceFake();
            string account = "cash";
            string password = "111234";
            bool result_1 = test.IsValid_1(account, password);

            Assert.IsTrue(result_1);
        }
    }

    class AuthenticationServiceFake : AuthenticationService_1
    {
        protected override string GetPassword_1(string account)
        {
            return "11";
        }
        protected override string GetRandom_1(string account)
        {
            return "1234";
        }
    }
}
