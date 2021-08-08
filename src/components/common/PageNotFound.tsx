import React from "react";

const PageNotFound = (props: any) => {
  const { pathname } = props.location;

  return (
    <div className="main">
      <div>
        <span className="error_title"> 페이지를 찾을 수 없습니다.</span>
        <hr className="line_white" />
        <div className="error_box">
          요청하신 페이지를 찾을 수 없습니다.({pathname.slice(1)})
          <button
            className="center"
            onClick={() => {
              props.history.push("/");
            }}
          >
            메인화면으로이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
