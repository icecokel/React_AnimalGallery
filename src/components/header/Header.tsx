import moment from "moment";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import LoginSessionUtil from "../../util/LoginSessionUtil";

const Header = (props: any) => {
  return (
    <div className="header_box">
      <Logo />
      <SearchBar />
      <SignInInfo />
    </div>
  );
};

const Logo = (props: any) => {
  const history = useHistory();
  return (
    <label
      className="logo"
      onClick={() => {
        history.push("/");
      }}
    >
      20210808
    </label>
  );
};

const SearchBar = () => {
  return <div> 검색창</div>;
};
const SignInInfo = (props: any) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState<any>({
    username: "",
    loginTime: undefined,
  });

  useEffect(() => {
    setUserInfo(LoginSessionUtil.getUserinfo);
  }, []);
  const onClickLogout = () => {
    LoginSessionUtil.logout();
    history.push("/signin");
  };
  return (
    <div className="loginInfo_box">
      <div>{userInfo.username}</div>
      <div>{moment(new Date(userInfo.loginTime)).format("MM월DD일 HH:mm")}</div>
      <button onClick={onClickLogout}>로그아웃</button>
    </div>
  );
};

export default Header;
