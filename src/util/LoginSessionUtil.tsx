import Account from "../asset/data/account.json";

const session = sessionStorage.getItem("account") ?? `{ "isLogin": false }`;
const accountInfo = JSON.parse(session);

const LoginSessionUtil = {
  getAccount: () => {
    const session = sessionStorage.getItem("account") ?? `{ "isLogin": false }`;
    return JSON.parse(session);
  },
  login: async (email: string, isLogin: boolean) => {
    const loginTime = new Date();
    const username = Account.accountList.find((item: any) => {
      return item.email === email;
    })?.username;
    const value = { email, isLogin, loginTime, username };
    sessionStorage.setItem("account", JSON.stringify(value));
  },
  logout: () => {
    sessionStorage.removeItem("account");
  },
  checkLogin: () => {
    return LoginSessionUtil.getAccount().isLogin;
  },
  getUserinfo: () => {
    const accountInfo = LoginSessionUtil.getAccount();
    const res = {
      username: accountInfo.username,
      loginTime: accountInfo.loginTime,
    };
    return res;
  },
};
export default LoginSessionUtil;
