import { useState, useEffect } from "react";

interface SizeType {
  name: string;
}

const SizeSelector = ({ setSize }: any) => {
  const [sizes, setSizes] = useState<SizeType[]>([
    { name: "XS" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "2XL" },
    { name: "3XL" },
  ]);
  const [selected, setSelected] = useState<string>(sizes[0].name);

  useEffect(() => {
    setSize(sizes[0].name);
  }, []);

  return (
    <div className="my-6">
      <div className="text-sm my-2">
        Size: <span className="font-semibold">{selected}</span>
      </div>
      <div className="flex my-3 item-center space-x-2">
        {sizes.map((item) => (
          <div
            key={item.name}
            style={{ boxSizing: "border-box" }}
            className={`cursor-pointer w-[14%] p-3 flex items-center font-semibold justify-center rounded-2xl border border-gray-300 border-1 ${
              selected === item.name
                ? " bg-[#007acc] text-white"
                : "text-black bg-white"
            } `}
            onClick={() => {
              setSelected(item.name);
              setSize(item.name);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
