using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectDependency
{
    public class AuthenticationServiceLog
    {
        private readonly IProfile profile;
        private readonly IToken token;
        private readonly ILog log;

        public AuthenticationServiceLog(IProfile profile, IToken token, ILog log)
        {
            this.profile = profile;
            this.token = token;
            this.log = log;
        }

        public bool IsValid(string account, string password)
        {
            // 根據 account 取得自訂密碼
            //var profileDao = new ProfileDao();
            var passwordFromDao = this.profile.GetPassword(account);

            // 根據 account 取得 RSA token 目前的亂數
            //IToken rsaToken = new RsaTokenDao();
            var randomCode = this.token.GetRandom(account);

            // 驗證傳入的 password 是否等於自訂密碼 + RSA token亂數
            var validPassword = passwordFromDao + randomCode;
            var isValid = password == validPassword;

            if (!isValid)
            {
                // todo, 如何驗證當有非法登入的情況發生時，有正確地記錄log？
                var content = string.Format("account:{0} try to login failed", account);
                this.log.Save(content);
            }

            return isValid;
        }
    }

    public class ProfileDao2 : IProfile
    {
        public string GetPassword(string account)
        {
            var result = Context.GetPassword(account);
            return result;
        }
    }

    public class RsaTokenDao2 : IToken
    {
        public string GetRandom(string account)
        {
            var seed = new Random((int)DateTime.Now.Ticks & 0x0000FFFF);
            var result = seed.Next(0, 999999);
            return result.ToString("000000");
        }
    }

    public interface IProfile
    {
        string GetPassword(string account);
    }

    public interface IToken
    {
        string GetRandom(string account);
    }

    public interface ILog
    {
        void Save(string p);
    }
}
