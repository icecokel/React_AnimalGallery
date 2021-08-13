import { useEffect, useState } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";

const DashBoard = (props: any) => {
  useEffect(() => {
    props.setHasHeader(true);
    if (!LoginSessionUtil.checkLogin()) {
      props.history.push("/signIn");
    }
  });
  return <div>sd</div>;
};

export default DashBoard;
