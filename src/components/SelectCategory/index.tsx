import React, { useEffect } from "react";

interface Props {
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectCategory: React.FC<Props> = ({ item, setItem }) => {
  const category = [
    { value: "transactions", label: "Transactions" },
    { value: "value", label: "Dollar Value" },
    { value: "quantity", label: "Quantity" },
    { value: "containers", label: "Containers" },
    { value: "weight", label: "Weight" },
  ];
  useEffect(() => {}, [item]);
  return (
    <div>
      <div
        className="flex justify-center rounded-sm"
        style={{ backgroundColor: "#F5F6FA" }}
      >
        {category.map((c: any) => {
          return (
            <div
              key={c.value}
              onClick={() => {
                setItem(c.value);
              }}
              className={`px-3 py-2 font-medium `}
              style={{
                backgroundColor: item === c.value ? "#422AFA" : "transparent",
                color: item === c.value ? "white" : "black",
              }}
            >
              {c.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
