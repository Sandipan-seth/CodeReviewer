import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import CodeReview from "./components/CodeReview";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-900">
      <header className="bg-gray-900 shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-cyan-400 drop-shadow-sm">
          ⚡ AI Code Review Tool
        </h1>
        <p className="text-center text-sm text-gray-300 mt-1">
          Paste your code and let AI suggest improvements and best practices.
        </p>
      </header>

      <main className="flex flex-col md:flex-row h-[90vh]">
        <CodeEditor />
        <CodeReview />
      </main>
    </div>
  );
};

export default App;
