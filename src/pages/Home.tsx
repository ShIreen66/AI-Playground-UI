import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import PromptEditor from "../components/PromptEditor";
import ParametersPanel from "../components/ParametersPanel";
import ChatOutput from "../components/ChatOutput";
import ThemeToggle from "../components/ThemeToggle";

const Home: React.FC = () => {
  const [model, setModel] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  return (
    <div className="flex h-screen dark:bg-gray-900 dark:text-white">
      <Sidebar onSelect={setModel} />

      <main className="flex flex-col flex-1">
        <PromptEditor onSubmit={setPrompt} />
        <ParametersPanel />
        <ChatOutput prompt={prompt} />
      </main>

      <ThemeToggle />
    </div>
  );
};

export default Home;
