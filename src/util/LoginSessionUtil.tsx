import { async } from "q";

const LoginSessionUtil = {
  login: async (id: string, isLogin: boolean) => {
    const loginTime = new Date().toLocaleString();
    const value = { id, isLogin, loginTime };
    sessionStorage.setItem("account", JSON.stringify(value));
  },
  logout: () => {
    sessionStorage.removeItem("account");
  },
  checkLogin: () => {
    const account = sessionStorage.getItem("account") ?? `{ isLogin: false }`;
    const json = JSON.parse(account);

    return json.isLogin;
  },
};
export default LoginSessionUtil;
