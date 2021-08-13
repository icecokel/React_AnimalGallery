import { useEffect, useState } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import Account from "../../asset/data/account.json";
import ErrorMessage from "../common/ErrorMessage";
import Cat from "../../asset/images/Cat.jpg";

const defaultData = {
  accountInfo: {
    email: "admin@ice.com",
    password: "1",
  },
  errorMessage: {
    account: false,
  },
};

const SignIn = (props: any) => {
  const [accountInfo, setAccountInfo] = useState<any>(defaultData.accountInfo);
  const [errorMessage, setErrorMessage] = useState<any>(
    defaultData.errorMessage
  );

  useEffect(() => {
    props.setHasHeader(false);
    if (LoginSessionUtil.checkLogin()) {
      props.history.push("/");
    }
  });

  const onClickSignIn = async () => {
    if (
      !!Account.accountList.find((item) => {
        return (
          item.email === accountInfo.email &&
          item.password === accountInfo.password
        );
      })
    ) {
      await LoginSessionUtil.login(accountInfo.email, true);
      props.history.push("/");
    } else {
      setErrorMessage({ account: true });
    }
  };

  return (
    <div className="content_box">
      <div className="login_box center">
        <img src={Cat} className="cat_image" />
        <h2>Login Animal Gallery</h2>
        <ErrorMessage
          text="이메일 또는 패스워드가 일치 하지 않습니다."
          isShowing={errorMessage.account}
        />
        <div>
          <input
            type="email"
            className="input_id"
            placeholder="Enter Your Email..."
            onChange={(e: any) => {
              const { value } = e.target;
              setAccountInfo({ ...accountInfo, email: value });
            }}
          />
          <input
            type="password"
            className="input_id"
            placeholder="Enter Your Password..."
            onChange={(e) => {
              const { value } = e.target;
              setAccountInfo({ ...accountInfo, password: value });
            }}
          />
        </div>
        <div className="btn_box">
          <button className="login_btn" onClick={onClickSignIn}>
            sign in
          </button>
          <button className="login_btn">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
