import React from "react";
import { Chart } from "react-google-charts";
import { dataJSON } from "utils";

interface Props {
  category: string;
}

export const PieChart: React.FC<Props> = ({ category }) => {
  const data = React.useMemo(() => {
    const newData: any = [["Name", ""]];
    dataJSON.forEach((item: any) => {
      newData.push([item.name, item[`${category}`]]);
    });
    return newData;
  }, [category]);
  const options = {
    is3D: true,
  };
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
