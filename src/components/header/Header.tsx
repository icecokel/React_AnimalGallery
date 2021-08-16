import moment from "moment";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import LoginSessionUtil from "../../util/LoginSessionUtil";

const defaultData = {
  tabList: [
    { title: "CATS", tag: ["cats"] },
    { title: "DOGS", tag: ["dogs"] },
    { title: "FOXS", tag: ["foxs"] },
    { title: "ETC", tag: ["etc"] },
  ],
};
const Header = (props: any) => {
  const history = useHistory();
  const [tabList] = useState<Array<any>>(defaultData.tabList);
  useEffect(() => {}, [tabList]);

  const onClickTab = (e: any) => {
    const { innerText } = e.target;
    if (innerText !== "ETC") {
      const info = tabList.find((info) => info.title === innerText);

      history.push("/gallery/" + innerText, { tag: info.tag });
    }
  };
  return (
    <>
      <header className="header_box">
        <Logo />
        <SearchBar />
        <SignInInfo />
      </header>
      <nav>
        <ul className="tab_conteiner">
          {tabList.map((item) => {
            return (
              <li className="tab_item">
                <label
                  onClick={(e) => {
                    onClickTab(e);
                  }}
                >
                  {item.title}
                </label>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

const Logo = (props: any) => {
  const history = useHistory();
  const onClickMenu = () => {
    // TODO :: 모바일 환경 작업 필요
    // const searchBar = document.getElementsByClassName("search_bar");
    // const loginInfoBox = document.getElementsByClassName("loginInfo_box");
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
  return (
    <div className="search_bar">
      <input type="text" placeholder="검색어를 입력해 주세요" name="" id="" />
      <button>검색</button>
    </div>
  );
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
