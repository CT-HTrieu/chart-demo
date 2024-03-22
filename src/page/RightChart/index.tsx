import React, { useState } from "react";
import { SelectCategory } from "components/SelectCategory";
import { GeoChart } from "components/GeoChart";
export const RightChart: React.FC = () => {
  const [item, setItem] = useState("transactions");
  return (
    <div  className="flex flex-col justify-between h-full	">
      <GeoChart category={item} />
      <div className="flex items-end justify-center" >
        <SelectCategory item={item} setItem={setItem} />
      </div>
    </div>
  );
};
