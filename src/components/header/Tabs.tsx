import { useEffect, useState } from "react";
import SignIn from "../main/SignIn";

const defaultData = {
  tabList: [
    { title: "CATS", tag: ["cat", "animal"], url: "" },
    { title: "DOGS", tag: ["dog", "animal"], url: "" },
    { title: "FOXS", tag: ["fox", "animal"], url: "" },
    { title: "ETC", tag: ["etc", "animal"], url: "" },
  ],
};
const Tabs = () => {
  const [tabList] = useState<Array<any>>(defaultData.tabList);
  useEffect(() => {}, [tabList]);
  return (
    <nav>
      <ul className="tab_conteiner">
        {tabList.map((item) => {
          return (
            <li className="tab_item">
              <label>{item.title}</label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Tabs;
