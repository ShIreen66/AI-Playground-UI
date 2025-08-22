import React, { useState } from "react";

const ParametersPanel: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(0.7);
  const [maxTokens, setMaxTokens] = useState<number>(200);

  return (
    <div className="p-4 border-t dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-3">Parameters</h2>

      <label className="block mb-2">
        Temperature: {temperature}
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
      </label>

      <label className="block">
        Max Tokens: {maxTokens}
        <input
          type="range"
          min={50}
          max={1000}
          step={50}
          value={maxTokens}
          onChange={(e) => setMaxTokens(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
      </label>
    </div>
  );
};

export default ParametersPanel;
