import React, { useState, useEffect, useContext } from "react";
import Prism from "prismjs";
import axios from "axios";

import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css"; // Use a dark Prism theme
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

import ReviewContext from "../contexts/ReviewContext";

const languageMap = {
  javascript: Prism.languages.javascript,
  jsx: Prism.languages.jsx,
  java: Prism.languages.java,
  python: Prism.languages.python,
  c: Prism.languages.c,
  cpp: Prism.languages.cpp,
  html: Prism.languages.markup,
  css: Prism.languages.css,
  json: Prism.languages.json,
};

const CodeEditor = () => {
  const { setReview } = useContext(ReviewContext);
  const [loader, setLoader] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [code, setCode] = useState(`function greet(name) {
  return "Hello, " + name + "!!";
}`);
  const [language, setLanguage] = useState("javascript");

  async function reviewCode() {
    try {
      setLoader(true);
      setReview("Reviewing your code... Please wait.");
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/ai/generate-text`,
        { code }
      );

      setLoader(false);

      if (response.data.success === "success") {
        setReview(response.data.generatedText);
      } else {
        setReview("No review available. Please try again.");
      }
    } catch (error) {
      console.error("Error reviewing code:", error);
      setLoader(false);
      setReview("Failed to review code. Please try again.");
    }
  }

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className="h-full md:w-1/2 w-full p-6 border-b md:border-b-0 md:border-r border-gray-700 flex flex-col bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow flex-1 flex flex-col border border-orange-500">
        <h2 className="text-xl font-semibold mb-4 text-orange-400">Code</h2>

        <div className="mb-4">
          <label htmlFor="lang" className="mr-2 font-semibold text-gray-300">
            Select Language:
          </label>
          <select
            id="lang"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-900 text-white border border-orange-500 rounded-md p-2"
          >
            <option value="javascript">JavaScript</option>
            <option value="jsx">JSX</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">CPP</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="json">JSON</option>
          </select>
        </div>

        <div className="flex-1 max-h-[60vh] overflow-y-auto rounded-md">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              Prism.highlight(
                code,
                languageMap[language] || Prism.languages.javascript,
                language
              )
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            padding={10}
            className={`bg-gray-900 text-white border ${
              isFocused
                ? "ring-2 ring-orange-500 border-orange-500"
                : "border-gray-700"
            } transition-shadow font-mono text-sm sm:text-base`}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              width: "100%",
              minHeight: "100%",
            }}
          />
        </div>

        <button
          onClick={reviewCode}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md self-end mt-4 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loader}
        >
          {loader ? "Reviewing..." : "Review Code"}
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
