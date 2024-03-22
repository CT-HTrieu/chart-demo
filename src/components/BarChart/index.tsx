import React from "react";
import { Chart } from "react-google-charts";
import { dataJSON } from "utils";

interface Props {
  category: string;
}

export const BarChart: React.FC<Props> = ({ category }) => {
  const data = React.useMemo(() => {
    const newData: any = [["Name", "Value", { role: "style" }]];
    dataJSON.forEach((item: any) => {
      newData.push([item.name, item[`${category}`], "#8A83F6"]);
    });
    return newData;
  }, [category]);
  const options = {
    legend: { position: 'none'},
  };
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
