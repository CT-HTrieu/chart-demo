import { BarChart } from "components/BarChart";
import React, { useState } from "react";
import { Tooltip } from "antd";
import { BarChartOutlined, PieChartOutlined } from "@ant-design/icons";
import { SelectCategory } from "components/SelectCategory";
import { PieChart } from "components/PieChart";
export const LeftChart: React.FC = () => {
  const [item, setItem] = useState("transactions");
  const [type, setType] = useState("bar");
  return (
    <div className="flex flex-col justify-between h-full	">
      <div className="flex gap-4">
        <Tooltip title="Bar Chart">
          <div
            onClick={() => {
              setType("bar");
            }}
          >
            <BarChartOutlined />
          </div>
        </Tooltip>
        <Tooltip title="Pie Chart">
          <div
            onClick={() => {
              setType("pie");
            }}
          >
            <PieChartOutlined />
          </div>
        </Tooltip>
      </div>
      {type === "bar" ? (
        <BarChart category={item} />
      ) : (
        <PieChart category={item} />
      )}
      <div className="flex items-end justify-center">
        <SelectCategory item={item} setItem={setItem} />
      </div> 
    </div>
  );
};
