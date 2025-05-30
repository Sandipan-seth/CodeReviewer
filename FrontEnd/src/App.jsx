import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import CodeReview from "./components/CodeReview";

const App = () => {
 

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <main className="flex flex-col md:flex-row h-screen overflow-hidden">
        <CodeEditor
        />
        <CodeReview  />
      </main>
    </div>
  );
};

export default App;
