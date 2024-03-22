import React from "react";
import { Chart } from "react-google-charts";
import { dataJSON } from "utils";

interface Props {
  category: string;
}

export const GeoChart: React.FC<Props> = ({ category }) => {
  const data = React.useMemo(() => {
    const newData: any = [["Country", "Popularity",]];
    dataJSON.forEach((item: any) => {
      newData.push([item.name, item[`${category}`],]);
    });
    return newData;
  }, [category]);
  const options = {
    legend: { position: 'none'},
    colorAxis: {colors: ['#C8C9FD', '#7266FB', '#503EED']},
  };
  return (
    <div>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
