import { useEffect } from "react";
import LoginSessionUtil from "../../util/LoginSessionUtil";
import { Doughnut } from "react-chartjs-2";
import { chartColors } from "../../asset/data/color";
import posts from "../../asset/data/posts.json";

const DashBoard = (props: any) => {
  useEffect(() => {
    props.setHasHeader(true);
    if (!LoginSessionUtil.checkLogin()) {
      props.history.push("/signIn");
    }
  });
  return (
    <div className="chart">
      <Doughnut
        data={{
          labels: ["CATS", "DOGS", "FOXS"],
          datasets: [
            {
              data: [3, 4, 1],
              backgroundColor: chartColors,
              hoverBackgroundColor: chartColors,
            },
          ],
        }}
        width={150}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DashBoard;
