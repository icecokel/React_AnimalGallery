import { useEffect, useState } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import Header from "../header/Header";

const Main = (props: any) => {
  useEffect(() => {
    if (!LoginSessionUtil.checkLogin()) {
      props.history.push("/signIn");
    }
  });
  return (
    <div className="main flex_row">
      <div>
        <Header />
        <div>탭</div>
        <div className="flex_column">
          <div className="content_box">sd</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
