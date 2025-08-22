import React, { useState } from "react";
import templates from "../mock/templates.json";

interface Props {
  onSubmit: (prompt: string) => void;
}

const PromptEditor: React.FC<Props> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex flex-col flex-1 p-4">
      <textarea
        className="w-full h-40 p-3 border rounded-lg mb-2 dark:bg-gray-900 dark:text-white"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={() => onSubmit(prompt)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
        >
          Run
        </button>
        <button
          onClick={() => setPrompt(templates[0].content)}
          className="px-4 py-2 bg-gray-300 text-black dark:bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          Load Template
        </button>
      </div>
    </div>
  );
};

export default PromptEditor;
