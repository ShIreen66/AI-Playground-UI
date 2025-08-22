import React, { useState } from "react";

const ChatOutput: React.FC<{ prompt: string }> = ({ prompt }) => {
  const [response, setResponse] = useState<string>("");

  React.useEffect(() => {
    if (prompt) {
      setResponse(`Mock response for: ${prompt}`);
    }
  }, [prompt]);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify({ response })], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "response.json";
    a.click();
  };

  return (
    <div className="flex-1 p-4 border-t dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-3">Response</h2>
      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mb-2">{response}</div>
      <div className="flex gap-2">
        <button onClick={handleCopy} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer">
          Copy
        </button>
        <button onClick={handleDownload} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer">
          Download
        </button>
      </div>
    </div>
  );
};

export default ChatOutput;
