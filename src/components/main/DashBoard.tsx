import { useEffect, useState } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import { Doughnut } from "react-chartjs-2";
import { chartColors } from "../../asset/data/color";
import posts from "../../asset/data/posts.json";

const labels = ["CATS", "DOGS", "FOXS"];
const DashBoard = (props: any) => {
  const [dataList, setDataList] = useState<Array<number>>();
  useEffect(() => {
    props.setHasHeader(true);
    if (!LoginSessionUtil.checkLogin()) {
      props.history.push("/signIn");
    }
    setChartData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setChartData = () => {
    // TODO 코드 간결하게 짜기 시도
    let param = { cats: 0, dogs: 0, foxs: 0 } as any;
    const updateDataList: Array<number> = [];
    labels.forEach((label) => {
      posts.list.forEach((post) => {
        if (post.tag.includes(label.toLowerCase())) {
          param[label.toLowerCase()]++;
        }
      });
    });
    Object.values(param).forEach((value) => {
      updateDataList.push(value as number);
    });

    setDataList(updateDataList);
  };

  return (
    <div className="dashboard_box">
      <h4>현재 총 {posts.list.length}개의 이미지가 존재합니다.</h4>

      <div className="chart">
        <div>
          차트와 같이 항목은 <br />
          CATS,DOGS,FOXS로 이루어져있습니다
        </div>
        <div>
          <Doughnut
            data={{
              labels: labels,
              datasets: [
                {
                  data: dataList,
                  backgroundColor: chartColors,
                  hoverBackgroundColor: chartColors,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
