import moment from "moment";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import Tabs from "./Tabs";

const Header = (props: any) => {
  return (
    <>
      <header className="header_box">
        <Logo />
        <SearchBar />
        <SignInInfo />
      </header>
      <Tabs />
    </>
  );
};

const Logo = (props: any) => {
  const history = useHistory();
  const onClickMenu = () => {
    const searchBar = document.getElementsByClassName("search_bar");
    const loginInfoBox = document.getElementsByClassName("loginInfo_box");
  };
  return (
    <div className="logo_box">
      <label
        onClick={() => {
          history.push("/");
        }}
      >
        20210808
      </label>
      <div className="menu" onClick={onClickMenu}>
        三
      </div>
    </div>
  );
};

const SearchBar = () => {
  return <div className="search_bar"> 검색창</div>;
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
      <span>
        {moment(new Date(userInfo.loginTime)).format("MM월DD일 HH:mm")}
      </span>
      <button onClick={onClickLogout}>로그아웃</button>
    </div>
  );
};

export default Header;
