import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import type { TableProps } from "antd";

import type { SearchProps } from "antd/es/input/Search";
import "./App.css";
import { LeftChart } from "page/LeftChart";
import { RightChart } from "page/RightChart";
import { dataJSON } from "utils";
type ColumnsType = TableProps["columns"];

function App() {
  const [data, setData] = useState<any>([]);
  const columns: ColumnsType = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: "Transactions",
      dataIndex: "transactions",
      key: "transactions",
      sorter: (a, b) => a.transactions - b.transactions,
    },
    {
      title: "Dollars Value",
      dataIndex: "value",
      key: "value",
      sorter: (a, b) => a.value - b.value,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Containers",
      dataIndex: "containers",
      sorter: (a, b) => a.containers - b.containers,
    },
    {
      title: "Weight",
      dataIndex: "weight",
      sorter: (a, b) => a.weight - b.weight,
    },
  ];
  useEffect(() => {
    setData(dataJSON);
  }, []);
  const onSeachValue: SearchProps["onSearch"] = (value, _e, info) => {
    const regex = new RegExp(value, "i");
    const newArray = dataJSON.filter((item: any) => item.name.match(regex));
    setData(newArray);
  };
  return (
    <div className="App">
      <div className="flex gap-4">
        <div className="flex-1 box">
          <LeftChart />
        </div>
        <div className="flex-1 box">
          <RightChart />
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8">
        <Input.Search
          onSearch={onSeachValue}
          placeholder="Filter by product name"
          enterButton
        />
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
