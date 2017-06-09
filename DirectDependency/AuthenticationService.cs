using System;

namespace DirectDependency
{
    public class AuthenticationService
    {
        private readonly IProfileDao profileDao;
        private readonly IRsaTokenDao rsaToken;

        public AuthenticationService(IProfileDao profileDao, IRsaTokenDao rsaToken)
        {
            this.profileDao = profileDao;
            this.rsaToken = rsaToken;
        }

        public bool IsValid(string account, string password)
        {
            // 根據 account 取得自訂密碼
            var passwordFromDao = profileDao.GetPassword(account);

            // 根據 account 取得 RSA token 目前的亂數
            var randomCode = rsaToken.GetRandom(account);

            // 驗證傳入的 password 是否等於自訂密碼 + RSA token亂數
            var validPassword = passwordFromDao + randomCode;
            var isValid = password == validPassword;

            return isValid;
        }
        //public bool IsValid(string account, string password)
        //{
        //    // 根據 account 取得自訂密碼
        //    var passwordFromDao = GetPassword(account);
        //    // 根據 account 取得 RSA token 目前的亂數
        //    var randomCode = GetRandom(account);

        //    // 驗證傳入的 password 是否等於自訂密碼 + RSA token亂數
        //    var validPassword = passwordFromDao + randomCode;
        //    var isValid = password == validPassword;

        //    return isValid;
        //}
        //protected virtual string GetRandom(string account)
        //{
        //    var rsaToken = new RsaTokenDao();
        //    var randomCode = rsaToken.GetRandom(account);
        //    return randomCode;
        //}

        //protected virtual string GetPassword(string account)
        //{
        //    var profileDao = new ProfileDao();
        //    var passwordFromDao = profileDao.GetPassword(account);
        //    return passwordFromDao;
        //}
    }


    public class ProfileDao
    {
        public string GetPassword(string account)
        {
            var result = Context.GetPassword(account);
            return result;
        }
    }


    public class RsaTokenDao
    {
        public string GetRandom(string account)
        {
            var seed = new Random((int)DateTime.Now.Ticks & 0x0000FFFF);
            var result = seed.Next(0, 999999);
            return result.ToString("000000");
        }
    }

    public interface IProfileDao
    {
        string GetPassword(string account);
    }

    public interface IRsaTokenDao
    {
        string GetRandom(string account);
    }
}
