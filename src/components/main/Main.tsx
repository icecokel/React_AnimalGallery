import { useEffect, useState } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import Header from "../header/Header";
import testData from "../../asset/data/posts.json";

const Main = (props: any) => {
  useEffect(() => {
    if (!LoginSessionUtil.checkLogin()) {
      props.history.push("/signIn");
    }
  });
  return (
    <div className="main flex_row">
      <div className="flex_column">
        <Header />
        <div>탭</div>
        <div className="content_box">
          <DashBoard />
        </div>
      </div>
    </div>
  );
};

const DashBoard = () => {
  const [resultList, setResultList] = useState<Array<any>>([{}]);
  useEffect(() => {
    setResultList(testData.posts);
  }, [resultList]);

  const createStyle = (height: number, width: number) => {
    return {
      gridRow: "span " + height,
      gridColumn: "span " + width,
    };
  };

  return <div className="grid_conteiner"></div>;
};

export default Main;
