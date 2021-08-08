import React from "react";

const ErrorMessage = (props: { text: string; isShowing: boolean }) => {
  return (
    <>{props.isShowing && <span className="error_msg"> {props.text}</span>}</>
  );
};

export default ErrorMessage;
