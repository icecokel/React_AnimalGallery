import { useEffect } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import Header from "../header/Header";

const Main = (props: any) => {
  useEffect(() => {
    const account = LoginSessionUtil.checkLogin();

    if (!account) {
      props.history.push("/signIn");
    }
  });
  return (
    <div className="main">
      <Header />
    </div>
  );
};

export default Main;
