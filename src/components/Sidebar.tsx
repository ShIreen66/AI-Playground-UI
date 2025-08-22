import React, { useState, useEffect } from "react";
import { Model } from "../types/models";
import models from "../mock/models.json";

const Sidebar: React.FC<{ onSelect: (model: string) => void }> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (models.length > 0) {
      setSelected(models[0].id);
      onSelect(models[0].id);
    }
  }, []);

  return (
    <aside className="w-60 bg-gray-100 dark:bg-gray-800 p-4">
      <h2 className="text-lg font-bold mb-4">Models</h2>
      <ul>
        {models.map((m: Model) => (
          <li
            key={m.id}
            onClick={() => {
              setSelected(m.id);
              onSelect(m.id);
            }}
            className={`cursor-pointer p-2 rounded-lg mb-2 ${
              selected === m.id
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {m.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
