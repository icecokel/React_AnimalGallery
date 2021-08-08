import { useState } from "react";
import Account from "../../asset/data/account.json";
import ErrorMessage from "../common/ErrorMessage";
import Cat from "../../asset/images/Cat.jpg";

const defaultData = {
  accountInfo: {
    id: "",
    password: "",
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

  const onClickSignIn = () => {
    if (
      !!Account.accountList.find((item) => {
        return (
          item.id === accountInfo.id && item.password === accountInfo.password
        );
      })
    ) {
      alert("Succese");
    } else {
      setErrorMessage({ account: true });
    }
  };

  return (
    <div className="content_box">
      <div className="login_box">
        <img src={Cat} className="cat_image" />
        <h2>Login Cats Gallery</h2>
        <ErrorMessage
          text="Check Your Email or Password !"
          isShowing={errorMessage.account}
        />
        <div>
          <input
            type="email"
            className="input_id"
            placeholder="Enter Your Email..."
            onChange={(e: any) => {
              const { value } = e.target;
              setAccountInfo({ ...accountInfo, id: value });
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
          <button onClick={onClickSignIn}>sign in</button>
          <button>sign up</button>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
